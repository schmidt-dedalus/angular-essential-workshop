import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';

@NgModule({
  declarations: [CityPipe],
  imports: [CommonModule],
  exports: [CityPipe]
})
export class SharedModule {}
