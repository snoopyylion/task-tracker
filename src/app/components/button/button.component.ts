import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true, // Optional: Use if you're working with standalone components
  imports: [CommonModule], // Add dependencies here if needed
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'] // Corrected from "styleUrl"
})
export class ButtonComponent {
  @Input() text!: string;  // Use `!` to ensure it’s not undefined (TypeScript strict mode)
  @Input() color!: string; // Same fix for `color`
  @Output() btnClicked = new EventEmitter();

  onClick() {
    this.btnClicked.emit();
  }
}

