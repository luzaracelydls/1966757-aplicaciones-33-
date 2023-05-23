import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistEjPage } from './playlist-ej.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistEjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistEjPageRoutingModule {}
