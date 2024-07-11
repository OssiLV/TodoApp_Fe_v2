import { Component } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@Component({
  selector: 'app-filters-labels',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './filters-labels.component.html',
  styleUrl: './filters-labels.component.css',
})
export class FiltersLabelsComponent {}
