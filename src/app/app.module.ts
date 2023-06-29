import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CompletedProjectsComponent } from './components/completed-projects/completed-projects.component';
import { InProgressProjectsComponent } from './components/in-progress-projects/in-progress-projects.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateNewProjectFormComponent } from './sub-components/create-new-project-form/create-new-project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectListComponent,
    CompletedProjectsComponent,
    InProgressProjectsComponent,
    MaintenanceComponent,
    CreateProjectComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidenavComponent,
    CreateNewProjectFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
