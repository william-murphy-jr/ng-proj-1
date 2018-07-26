import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { USERS } from '../../mock-data/mock-users';
import { User } from '../../classes/user';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  users = USERS;

  newUser = new User();

  constructor(private router: Router) { }


  addNewUser() {
    const numStr: string = (Math.random() * 10000000000000).toString();
    const numStr2: string = (Math.random() * 10000000000000).toString();

    const _id: string = (numStr + numStr2).slice(0, 24);
    console.log('_id', _id);

    this.newUser._id = _id;
    this.newUser.createdOn = (new Date()).toString();
    this.users.push(this.newUser);
    console.log(this.newUser);

    console.log(this.users);

    // Redirect if we have a successful login
    this.router.navigate(['user/' + this.newUser]);

    return true;


  }

  ngOnInit() {
  }

}
