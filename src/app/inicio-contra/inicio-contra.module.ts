import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioContraPageRoutingModule } from './inicio-contra-routing.module';

import { InicioContraPage } from './inicio-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioContraPageRoutingModule
  ],
  declarations: [InicioContraPage]
})
export class InicioContraPageModule {}
