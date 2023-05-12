import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';
import { BuscarComponent } from '../buscar/buscar.component';
import { PrincipalPageModule } from './principal.module';
import { LibreriaComponent } from '../libreria/libreria.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
