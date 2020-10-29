import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { ReglesComponent } from './../../regles/regles.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor(private userService: UserService, public popoverController: PopoverController) { }
  test = '';
  players = [];

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
