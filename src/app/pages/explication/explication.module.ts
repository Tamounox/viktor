import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplicationPageRoutingModule } from './explication-routing.module';

import { ExplicationPage } from './explication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplicationPageRoutingModule
  ],
  declarations: [ExplicationPage]
})
export class ExplicationPageModule {}
