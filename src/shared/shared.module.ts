import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { ErrorValidationMessageComponent } from './error-validation-message/error-validation-message.component';

@NgModule({
  declarations: [CityPipe, ErrorValidationMessageComponent],
  imports: [CommonModule],
  exports: [CityPipe, ErrorValidationMessageComponent]
})
export class SharedModule {}
