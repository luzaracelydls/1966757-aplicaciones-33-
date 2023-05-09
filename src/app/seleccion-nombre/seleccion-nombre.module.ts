import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionNombrePageRoutingModule } from './seleccion-nombre-routing.module';

import { SeleccionNombrePage } from './seleccion-nombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionNombrePageRoutingModule
  ],
  declarations: [SeleccionNombrePage]
})
export class SeleccionNombrePageModule {}
