import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seleccion-nombre',
  templateUrl: './seleccion-nombre.page.html',
  styleUrls: ['./seleccion-nombre.page.scss'],
})
export class SeleccionNombrePage implements OnInit {

  isButtonEnabled = false;

  constructor(private nav:NavController) { }

  toggleButton(event:any){
    this.isButtonEnabled=event.detail.checked;
  }

  navToRegistroContra(){
    this.nav.navigateForward('/registro-contra')
  }

  navToTerminos(){
    this.nav.navigateForward('/terminos')
  }

  navToArtistas() {
    this.nav.navigateForward('/artistas');
  }
  ngOnInit() {
  }

}
