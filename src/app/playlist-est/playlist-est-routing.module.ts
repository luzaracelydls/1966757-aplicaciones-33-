import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistEstPage } from './playlist-est.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistEstPageRoutingModule {}
