import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoologiePage } from './zoologie.page';

const routes: Routes = [
  {
    path: '',
    component: ZoologiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoologiePageRoutingModule {}
