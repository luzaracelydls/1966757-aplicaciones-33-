import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccion-nombre',
  templateUrl: './seleccion-nombre.page.html',
  styleUrls: ['./seleccion-nombre.page.scss'],
})
export class SeleccionNombrePage implements OnInit {

  constructor(private nav:NavController) { }

  navToHome(){
    this.nav.navigateForward('/registro-contra')
  }

  navToTerminos(){
    this.nav.navigateForward('/terminos')
  }
  ngOnInit() {
  }

}
