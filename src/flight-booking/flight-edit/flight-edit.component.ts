import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../entities/flight';
import { FormBuilder, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css'
})
export class FlightEditComponent implements OnChanges {
  @Input({ required: true }) flight!: Flight;

  editForm = inject(FormBuilder).group({
    id: [0, [Validators.required, Validators.min(1)]],
    from: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    to: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    date: ['', [Validators.required, Validators.minLength(32), Validators.maxLength(32)]]
  });
  message = '';
  protected readonly String = String;

  constructor() {
    this.editForm.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      console.debug('formValue ', value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.dirty);

    if (this.flight) {
      this.editForm.patchValue(this.flight);
    }
  }
}
