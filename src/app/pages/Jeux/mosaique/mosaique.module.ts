import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MosaiquePageRoutingModule } from './mosaique-routing.module';

import { MosaiquePage } from './mosaique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MosaiquePageRoutingModule
  ],
  declarations: [MosaiquePage]
})
export class MosaiquePageModule {}
