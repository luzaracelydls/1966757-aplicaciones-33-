import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistDorPage } from './playlist-dor.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistDorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistDorPageRoutingModule {}
