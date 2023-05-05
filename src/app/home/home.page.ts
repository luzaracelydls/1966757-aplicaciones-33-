import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController) {
  }
  
  navToRegistro(){
  this.nav.navigateForward('/registro')
  }

  navToInicio(){
  this.nav.navigateForward('/inicio')
  }
}
