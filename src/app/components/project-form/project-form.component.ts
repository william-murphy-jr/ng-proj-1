import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../classes/user';
import { Project } from '../../classes/project';

import { USERS } from '../../mock-data/mock-users';
import { PROJECTS } from '../../mock-data/mock-projects';



@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})

export class ProjectFormComponent implements OnInit {

  projects: Project[] = PROJECTS;
  newProject: Project = new Project();
  temp: any; // holds any url
  user: User;

  tasks: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  addProject() {
    // this.newProject.name = this._id;
    this.newProject.name = this.user.name;
    this.newProject.createdBy = this.user._id;
    this.newProject.projectName = this.newProject.projectName;
    this.newProject.modifiedOn = '';
    this.newProject.createdOn = (new Date()).toString();

    console.log('before projects[]: ', this.projects);
    this.projects.push(this.newProject);
    console.log('After ".push" projects[]: ', this.projects);

    this.newProject = new Project();
    console.log('this.newProject: ', this.newProject);

    // Redirect user back to page showing all their posts
    this.router.navigate(['user/' + this.user._id]);

  }

  ngOnInit() { // this is a promise
    // to grab stuff from a url just the use below code
    this.temp = this.route.params.subscribe(params => {
      USERS.forEach((user) => {
        if (user._id === params['id']) {
          this.user = user;
          console.log('this.user: ', this.user);
          // return this.hero = el;
        }
      });
    }); // end of url grabber
  }

}
