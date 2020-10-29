import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourbonusPageRoutingModule } from './tourbonus-routing.module';

import { TourbonusPage } from './tourbonus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourbonusPageRoutingModule
  ],
  declarations: [TourbonusPage]
})
export class TourbonusPageModule {}
