import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  project_id: string | null = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.project_id = this.activatedRoute.snapshot.paramMap.get('project_id');
    console.log(this.project_id);
  }
}
