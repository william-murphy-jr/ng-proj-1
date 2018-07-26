import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '../../classes/user';
import { Project } from '../../classes/project';

import { USERS } from '../../mock-data/mock-users';
import { PROJECTS } from '../../mock-data/mock-projects';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users = USERS;
  projects = PROJECTS;
  tempProjects: Project[] = [];

  loginUser: User = new User();

  getProjects (userID) {
    console.log('userID: ', userID);
    this.projects.forEach((project) => {
      if (project.createdBy === userID) {
        this.tempProjects.push(project);
      }
    });

    // Redirect if we have a successful login
    this.router.navigate(['user/' + userID]);
  }

  // Inject Router into the constrcutor
  constructor(private router: Router) {
  }

  logUserIn() {

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.loginUser.email && this.users[i].password === this.loginUser.password) {
        console.log('Login Successful: ' + this.users[i].name + ' : ' + this.users[i].email);
        const userID: string = this.users[i]._id;
        this.getProjects(userID);
        return true;
      } else {
        console.log('Login FAILED!!!');
        return false;
      }
    }

    console.log('logUserIn');
  } // logUserIn

  ngOnInit() {
  }

}
