import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { SidebarIconComponent } from '@icons/sidebar-icon/sidebar-icon.component';
import { ChevronDownIconComponent } from '../../icons/chevron-down-icon/chevron-down-icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, SidebarIconComponent, ChevronDownIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  status = false;
  onClick() {
    this.status = !this.status;
  }
}
