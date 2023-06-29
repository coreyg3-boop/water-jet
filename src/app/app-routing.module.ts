import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes.component';
import { MainComponent } from './components/main/main.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { InProgressProjectsComponent } from './components/in-progress-projects/in-progress-projects.component';
import { CompletedProjectsComponent } from './components/completed-projects/completed-projects.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'inProgress', component: InProgressProjectsComponent },
  { path: 'completed', component: CompletedProjectsComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'createProject', component: CreateProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }