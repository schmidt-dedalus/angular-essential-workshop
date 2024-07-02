import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrl: './status-toggle.component.css'
})
export class StatusToggleComponent {
  @Input() delayed = false;
  @Output() delayedChange = new EventEmitter<boolean>();

  toggle(): void {
    this.delayed = !this.delayed;
    this.delayedChange.emit(this.delayed);
  }
}
