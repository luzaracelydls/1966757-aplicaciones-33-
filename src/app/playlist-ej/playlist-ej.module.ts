import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistEjPageRoutingModule } from './playlist-ej-routing.module';

import { PlaylistEjPage } from './playlist-ej.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistEjPageRoutingModule
  ],
  declarations: [PlaylistEjPage]
})
export class PlaylistEjPageModule {}
