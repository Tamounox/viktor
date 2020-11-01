import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinner',
  templateUrl: './vinner.page.html',
  styleUrls: ['./vinner.page.scss'],
})
export class VinnerPage implements OnInit {

  constructor(private userService: UserService) { }

  selectedUser = '';
  users;
  isSelected = false;
  ngOnInit() {
    this.users = this.userService.renderUsers();
    console.log('users', this.users);
  }
  updateUsers() {
    let updatedArray = [];
    for (let el of this.users) {
      if (el.name === this.selectedUser) {
        el.score = el.score + 5;
      }
      updatedArray.push(el);
    }
    this.users = updatedArray;
    this.userService.getUsers(this.users);
  }
  selectWinner()  {
    if (this.selectedUser.length >= 1)  {
      this.isSelected = true;
    }
  }
}
