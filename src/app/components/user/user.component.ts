import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { USERS } from '../../mock-data/mock-users';
import { PROJECTS } from '../../mock-data/mock-projects';

import { Project } from '../../classes/project';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  private temp: any;    // Use to store any url data

  userProjects: Project[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { // this is a promise
    // to grab stuff from a url just the use below code
    this.temp = this.route.params.subscribe(params => {
      PROJECTS.forEach((project) => {
        if (project.createdBy === params['id']) {
          this.userProjects.push(project);
          // console.log('project: ', project);
          // return this.hero = el;
        }
      });
    }); // end of url grabber
    // console.log('this.userProjects: ', this.userProjects);
  } // ngOnInit

}
