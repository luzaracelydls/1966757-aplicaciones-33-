import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistEstPageRoutingModule } from './playlist-est-routing.module';

import { PlaylistEstPage } from './playlist-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistEstPageRoutingModule
  ],
  declarations: [PlaylistEstPage]
})
export class PlaylistEstPageModule {}
