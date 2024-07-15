import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { TaskComponent } from '@components/task/task.component';
import { ITask } from '@model-types/task.type';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faCircleCheck,
  faCircleQuestion,
} from '@ng-icons/font-awesome/regular';
import {
  heroAdjustmentsHorizontal,
  heroEllipsisHorizontal,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [SidebarComponent, NgIconComponent, TaskComponent, NgClass],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
  viewProviders: [
    provideIcons({
      heroEllipsisHorizontal,
      heroAdjustmentsHorizontal,
      faCircleQuestion,
      faCircleCheck,
    }),
  ],
})
export class TodayComponent implements OnInit {
  isShowCompletedTask = false;
  statusToggleSidebar = true;

  listTaksTest = [
    { id: 0, content: 'task_1', desc: 'task_desc_1', isCompleted: true },
    { id: 1, content: 'task_2', desc: 'task_desc_2', isCompleted: false },
    { id: 2, content: 'task_3', desc: 'task_desc_3', isCompleted: false },
    { id: 3, content: 'task_4', desc: 'task_desc_4', isCompleted: true },
    { id: 4, content: 'task_5', desc: 'task_desc_5', isCompleted: false },
    { id: 5, content: 'task_6', desc: 'task_desc_6', isCompleted: true },
  ];

  taskCompleted: ITask[] = [];
  taskInCompleted: ITask[] = [];

  handleStatusToggleSidebarFromChild(statusSidebarFromChild: boolean) {
    this.statusToggleSidebar = statusSidebarFromChild;
  }

  handleChangeShowCompletedTask() {
    this.isShowCompletedTask = !this.isShowCompletedTask;
  }

  ngOnInit(): void {
    this.taskCompleted = this.listTaksTest.filter((task) => task.isCompleted);
    this.taskInCompleted = this.listTaksTest.filter(
      (task) => !task.isCompleted
    );
  }
}
