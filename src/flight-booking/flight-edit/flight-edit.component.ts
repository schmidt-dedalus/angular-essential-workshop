import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Flight } from '../entities/flight';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css'
})
export class FlightEditComponent implements OnChanges {
  @Input({ required: true }) flight!: Flight;
  @Output() save = new EventEmitter<Flight>();

  editForm = inject(FormBuilder).group({
    id: [0, [Validators.required, Validators.min(1)]],
    from: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    to: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    date: ['', [Validators.required, Validators.minLength(32), Validators.maxLength(32)]]
  });
  message = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.flight) {
      this.editForm.patchValue(this.flight);
    }
  }

  submit() {
    if (this.editForm.valid) {
      this.save.emit({
        ...this.flight,
        id: this.editForm.value.id ?? this.flight.id,
        from: this.editForm.value.from ?? this.flight.from,
        to: this.editForm.value.to ?? this.flight.to,
        date: this.editForm.value.date ?? this.flight.date
      });
    }
  }
}
