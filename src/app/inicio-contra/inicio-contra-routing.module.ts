import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioContraPage } from './inicio-contra.page';

const routes: Routes = [
  {
    path: '',
    component: InicioContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioContraPageRoutingModule {}
