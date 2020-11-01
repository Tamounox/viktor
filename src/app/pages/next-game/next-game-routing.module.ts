import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextGamePage } from './next-game.page';

const routes: Routes = [
  {
    path: '',
    component: NextGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextGamePageRoutingModule {}
