import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroContraPage } from './registro-contra.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroContraPageRoutingModule {}
