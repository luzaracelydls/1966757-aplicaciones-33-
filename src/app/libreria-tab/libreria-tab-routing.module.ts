import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibreriaTabPage } from './libreria-tab.page';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { PerfilPage } from '../perfil/perfil.page';

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
