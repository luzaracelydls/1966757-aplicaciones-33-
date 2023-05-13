import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibreriaTabPage } from './libreria-tab.page';

const routes: Routes = [
  {
    path: '',
    component: LibreriaTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibreriaTabPageRoutingModule {}
