import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css'
})
export class FlightCardComponent {
  @Input({ required: true }) item!: Flight;
  @Input() selected = false;
  @Input() delayed = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  remove() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }
}
