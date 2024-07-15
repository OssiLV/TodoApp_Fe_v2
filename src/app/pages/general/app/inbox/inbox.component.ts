import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [SidebarComponent, NgClass],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent {
  statusToggleSidebar = true;
  handleStatusToggleSidebarFromChild(statusSidebarFromChild: boolean) {
    this.statusToggleSidebar = statusSidebarFromChild;
  }
}
