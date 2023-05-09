import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionNombrePage } from './seleccion-nombre.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionNombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionNombrePageRoutingModule {}
