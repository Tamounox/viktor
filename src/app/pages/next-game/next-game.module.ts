import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextGamePageRoutingModule } from './next-game-routing.module';

import { NextGamePage } from './next-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextGamePageRoutingModule
  ],
  declarations: [NextGamePage]
})
export class NextGamePageModule {}
