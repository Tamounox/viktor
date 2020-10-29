import { ReglesComponent } from './../../regles/regles.component';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ReglesComponent,
      cssClass: '',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
