import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistDorPageRoutingModule } from './playlist-dor-routing.module';

import { PlaylistDorPage } from './playlist-dor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistDorPageRoutingModule
  ],
  declarations: [PlaylistDorPage]
})
export class PlaylistDorPageModule {}
