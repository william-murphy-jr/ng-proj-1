import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserformComponent } from './components/userform/userform.component';
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/new', component: UserformComponent },
  { path: 'user/:id' , component: UserComponent },
  { path: 'project/new/:id', component: ProjectFormComponent },
  { path: 'project/:id', component: ProjectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [ RouterModule ]
  // declarations: []
})
export class AppRoutingModule { }
