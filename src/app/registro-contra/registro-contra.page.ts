import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-contra',
  templateUrl: './registro-contra.page.html',
  styleUrls: ['./registro-contra.page.scss'],
})
export class RegistroContraPage implements OnInit {

  constructor(private nav:NavController) { }
  
  navToHome(){
    this.nav.navigateForward('/registro')
  }

  navToNombre(){
    this.nav.navigateForward('/seleccion-nombre')
  }

  ngOnInit() {
  }

}
