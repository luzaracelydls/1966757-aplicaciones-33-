import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistFiestaPage } from './playlist-fiesta.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistFiestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistFiestaPageRoutingModule {}
