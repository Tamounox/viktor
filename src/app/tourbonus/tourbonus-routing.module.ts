import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourbonusPage } from './tourbonus.page';

const routes: Routes = [
  {
    path: '',
    component: TourbonusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourbonusPageRoutingModule {}
