import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../classes/project';

import { PROJECTS } from '../../mock-data/mock-projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  temp: any;

  project: Project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { // this is a promise
    // to grab stuff from a url just the use below code
    this.temp = this.route.params.subscribe(params => {
      PROJECTS.forEach((project) => {
        if (project._id === params['id']) {
          this.project = project;
          // console.log('this.project: ', this.project);
          // return this.hero = el;
        }
      });
    }); // end of url grabber
    // console.log('this.userProjects: ', this.project);
  } // ngOnInit

}
