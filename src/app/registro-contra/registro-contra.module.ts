import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroContraPageRoutingModule } from './registro-contra-routing.module';

import { RegistroContraPage } from './registro-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroContraPageRoutingModule
  ],
  declarations: [RegistroContraPage]
})
export class RegistroContraPageModule {}
