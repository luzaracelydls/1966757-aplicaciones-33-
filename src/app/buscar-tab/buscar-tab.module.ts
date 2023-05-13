import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarTabPageRoutingModule } from './buscar-tab-routing.module';

import { BuscarTabPage } from './buscar-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarTabPageRoutingModule
  ],
  declarations: [BuscarTabPage]
})
export class BuscarTabPageModule {}
