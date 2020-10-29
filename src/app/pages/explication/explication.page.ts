import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-explication',
  templateUrl: './explication.page.html',
  styleUrls: ['./explication.page.scss'],
})
export class ExplicationPage implements OnInit {

  constructor(private userService: UserService) { }
  aleatoirePlayer;
  users;
  ngOnInit() {
    this.users = this.userService.renderUsers();
    this.random();
  }
  random()  {
    let index = Math.floor(Math.random() * Math.floor(this.users.length));
    this.aleatoirePlayer = this.users[index];
  }

}
