import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinnerPageRoutingModule } from './vinner-routing.module';

import { VinnerPage } from './vinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinnerPageRoutingModule
  ],
  declarations: [VinnerPage]
})
export class VinnerPageModule {}
