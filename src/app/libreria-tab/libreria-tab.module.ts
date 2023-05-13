import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibreriaTabPageRoutingModule } from './libreria-tab-routing.module';

import { LibreriaTabPage } from './libreria-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibreriaTabPageRoutingModule
  ],
  declarations: [LibreriaTabPage]
})
export class LibreriaTabPageModule {}
