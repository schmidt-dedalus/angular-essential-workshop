import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-validation-message',
  templateUrl: './error-validation-message.component.html',
  styleUrl: './error-validation-message.component.css'
})
export class ErrorValidationMessageComponent implements OnChanges {
  @Input({ required: true }) errors: ValidationErrors | null = null;
  @Input({ required: true }) value?: string | number | null;
  @Input() label = 'Input';
  hasChanged = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.value, this.errors);
    if (this.value || (typeof this.value === 'string' && this.value.length > 0)) {
      this.hasChanged = true;
    }
  }
}
