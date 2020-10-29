import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(private userService: UserService) { }
  test = '';
  players = [];

  ngOnInit() {
  }

  addPlayer() {
    console.log('players', this.players);
    this.players.push( {
      name: this.test,
      score: 0
    });
    this.test = '';
    console.log('players', this.players);
    this.userService.getUsers(this.players);
  }
}
