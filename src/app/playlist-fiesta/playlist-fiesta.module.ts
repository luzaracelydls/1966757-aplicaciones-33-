import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistFiestaPageRoutingModule } from './playlist-fiesta-routing.module';

import { PlaylistFiestaPage } from './playlist-fiesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistFiestaPageRoutingModule
  ],
  declarations: [PlaylistFiestaPage]
})
export class PlaylistFiestaPageModule {}
