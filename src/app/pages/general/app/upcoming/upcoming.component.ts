import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css',
})
export class UpcomingComponent {}
