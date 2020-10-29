import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplicationPage } from './explication.page';

const routes: Routes = [
  {
    path: '',
    component: ExplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplicationPageRoutingModule {}
