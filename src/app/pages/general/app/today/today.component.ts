import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
})
export class TodayComponent {}
