import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroChevronDown,
  heroBars3CenterLeft,
  heroInbox,
  heroCalendar,
  heroSquares2x2,
  heroCalendarDays,
  heroCog8Tooth,
  heroPlus,
  heroArrowRightEndOnRectangle,
} from '@ng-icons/heroicons/outline';

interface INavItem {
  id: string;
  name: string;
  icon: string;
  path: string;
}

interface IProfileItem {
  id: string;
  name: string;
  icon: string;
  path: string;
  divider: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  viewProviders: [
    provideIcons({
      heroChevronDown,
      heroBars3CenterLeft,
      heroInbox,
      heroCalendar,
      heroSquares2x2,
      heroCalendarDays,
      heroCog8Tooth,
      heroPlus,
      heroArrowRightEndOnRectangle,
    }),
  ],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  @Input() currentNav:
    | 'inbox'
    | 'today'
    | 'upcoming'
    | 'filters-labels'
    | undefined;
  @Input() countItem: number | undefined;
  @Output() statusToggleSdebarFromChild = new EventEmitter<boolean>();

  statusToggleSidebar = true;
  navItems: INavItem[] = [
    {
      id: 'inbox',
      name: 'Inbox',
      icon: 'heroInbox',
      path: '/app/inbox',
    },
    {
      id: 'today',
      name: 'Today',
      icon: 'heroCalendar',
      path: '/app/today',
    },
    {
      id: 'upcoming',
      name: 'Upcoming',
      icon: 'heroCalendarDays',
      path: '/app/upcoming',
    },
    {
      id: 'filters-labels',
      name: 'Filters & Labels',
      icon: 'heroSquares2x2',
      path: '/app/filters-labels',
    },
  ];

  profilItems: IProfileItem[] = [
    {
      id: 'settings',
      name: 'Settings',
      icon: 'heroCog8Tooth',
      path: '/app/settings/account',
      divider: false,
    },
    {
      id: 'add_team',
      name: 'Add a team',
      icon: 'heroPlus',
      path: '#',
      divider: true,
    },
    {
      id: 'log_out',
      name: 'Log out',
      icon: 'heroArrowRightEndOnRectangle',
      path: '#',
      divider: true,
    },
  ];

  navItemChange(path: string) {
    this.router.navigate([path]);
  }

  toggleSidebar() {
    this.statusToggleSidebar = !this.statusToggleSidebar;
    this.statusToggleSdebarFromChild.emit(this.statusToggleSidebar);
    console.log(this.statusToggleSidebar);
  }
}
