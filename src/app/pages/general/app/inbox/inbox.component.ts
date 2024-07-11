import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent {}
