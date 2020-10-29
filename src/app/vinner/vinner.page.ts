import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinner',
  templateUrl: './vinner.page.html',
  styleUrls: ['./vinner.page.scss'],
})
export class VinnerPage implements OnInit {

  constructor(private userService: UserService) { }

  users;
  ngOnInit() {
    this.users = this.userService.renderUsers();
  }
  updateUsers(user) {
    console.log('user', user);
    // user.score = user.score + 3;
    this.users[user.name] = user;
    this.userService.getUsers(this.users);
    console.log('user', user);
    console.log('users', this.users);
  }


}
