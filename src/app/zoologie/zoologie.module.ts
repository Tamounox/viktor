import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoologiePageRoutingModule } from './zoologie-routing.module';

import { ZoologiePage } from './zoologie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoologiePageRoutingModule
  ],
  declarations: [ZoologiePage]
})
export class ZoologiePageModule {}
