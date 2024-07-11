import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar-icon.component.html',
  styleUrl: './sidebar-icon.component.css',
})
export class SidebarIconComponent {
  @Input() class: string | undefined;
  @Input() size: 'small' | 'medium' | 'large' | undefined;
}
