import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-next-game',
  templateUrl: './next-game.page.html',
  styleUrls: ['./next-game.page.scss'],
})
export class NextGamePage implements OnInit {

  constructor(private userService: UserService) { }
  users;
  isWinner = false;
  ngOnInit() {
    this.users = this.userService.renderUsers();
    console.log('users', this.users);
    this.users.forEach(user => {
      if  (user.score === 10)  {
        this.isWinner = true;
      }
    });
  }


}
