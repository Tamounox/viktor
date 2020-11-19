import { Component, OnInit } from '@angular/core';
import { ReglesComponent } from './../../components/regles/regles.component';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(private userService: UserService, public popoverController: PopoverController) { }
  test = '';
  players = [];
  isOnePlayerOrMore = false;
  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ReglesComponent,
      cssClass: '',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  addPlayer() {
    if (this.test.length >= 1)  {
      this.players.push( {
        name: this.test,
        score: 0
      });
      this.test = '';
      this.userService.getUsers(this.players);
      this.isOnePlayerOrMore = true;
    }
  }

  deletePlayer(player)  {
    let updatedArray = [];
    for (let el of this.players) {
      if (el !== this.players[player]) {
        updatedArray.push(el);
      }
    }
    this.players = updatedArray;
    this.userService.getUsers(this.players);
    if  (this.players.length === 0)  {
      this.isOnePlayerOrMore = false;
    }
  }
}
