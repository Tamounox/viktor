import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrocopePage } from './microcope.page';

const routes: Routes = [
  {
    path: '',
    component: MicrocopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicrocopePageRoutingModule {}
