import { Routes } from '@angular/router';
import { FiltersLabelsComponent } from '@pages/general/app/filters-labels/filters-labels.component';
import { InboxComponent } from '@pages/general/app/inbox/inbox.component';
import { ProjectComponent } from '@pages/general/app/project/project.component';
import { TodayComponent } from '@pages/general/app/today/today.component';
import { UpcomingComponent } from '@pages/general/app/upcoming/upcoming.component';
import { LoginComponent } from '@pages/general/auth/login/login.component';
import { SignupComponent } from '@pages/general/auth/signup/signup.component';
import { HomeComponent } from '@pages/general/home/home.component';
import { NotFoundComponent } from '@pages/general/not-found/not-found.component';

export const routes: Routes = [
  // HOME PAGE
  { path: '', component: HomeComponent, title: 'App' },

  // AUTH PAGE
  { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent, title: 'Login' },
  { path: 'auth/signup', component: SignupComponent, title: 'Signup' },

  // APP PAGE
  { path: 'app', redirectTo: '/app/today', pathMatch: 'full' },
  { path: 'app/inbox', component: InboxComponent, title: 'Inbox' },
  { path: 'app/today', component: TodayComponent, title: 'Today' },
  { path: 'app/upcoming', component: UpcomingComponent, title: 'Upcoming' },
  {
    path: 'app/filters-labels',
    component: FiltersLabelsComponent,
    title: 'Filters-Labels',
  },
  {
    path: 'app/project/:project_id',
    component: ProjectComponent,
    title: 'Project',
  },

  // NOTFOUND - 404
  { path: '404', component: NotFoundComponent, title: 'NotFound' },
  { path: '**', component: NotFoundComponent, title: 'NotFound' },
];
