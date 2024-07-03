import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../entities/flight';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css'
})
export class FlightEditComponent {
  id = 0;
  showDetails = false;
  flight?: Flight;

  editForm = inject(FormBuilder).group({
    id: [0, [Validators.required, Validators.min(1)]],
    from: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    to: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    date: ['', [Validators.required, Validators.minLength(32), Validators.maxLength(32)]]
  });

  private readonly route = inject(ActivatedRoute);
  private readonly flightService = inject(FlightService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly location = inject(Location);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.id = Number.parseInt(params.get('id') ?? '');
      this.showDetails = params.get('showDetails')?.toLowerCase() === 'true';

      this.flightService
        .findById(this.id.toString())
        .pipe(takeUntilDestroyed())
        .subscribe((flight) => {
          this.flight = flight;
          this.editForm.patchValue(flight);
        });
    });
  }

  submit() {
    if (this.editForm.valid && this.flight) {
      console.log(this.flight, this.editForm.valid);
      this.flightService
        .save(this.editForm.value as Flight)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((flight) => {
          this.location.back();
        });
    }
  }
}
