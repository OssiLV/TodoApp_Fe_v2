import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faCircle, faCircleCheck } from '@ng-icons/font-awesome/regular';
import { ITask } from '@model-types/task.type';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  viewProviders: [
    provideIcons({
      faCircle,
      faCircleCheck,
    }),
  ],
})
export class TaskComponent {
  @Input() task: ITask | undefined;

  handleCompletedTask() {
    console.log(this.task?.id);
  }
}
