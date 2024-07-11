import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-down-icon',
  standalone: true,
  imports: [],
  templateUrl: './chevron-down-icon.component.html',
  styleUrl: './chevron-down-icon.component.css',
})
export class ChevronDownIconComponent {
  @Input() class: string | undefined;
  @Input() size: 'small' | 'medium' | 'large' | undefined;
}
