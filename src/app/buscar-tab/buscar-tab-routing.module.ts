import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarTabPage } from './buscar-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarTabPageRoutingModule {}
