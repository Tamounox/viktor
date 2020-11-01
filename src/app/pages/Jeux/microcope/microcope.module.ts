import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicrocopePageRoutingModule } from './microcope-routing.module';

import { MicrocopePage } from './microcope.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicrocopePageRoutingModule
  ],
  declarations: [MicrocopePage]
})
export class MicrocopePageModule {}
