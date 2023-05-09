import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav:NavController) { }
  
  navToHome(){
    this.nav.navigateForward('/home')
  }

  navToInicioContra(){
    this.nav.navigateForward('/inicio-contra')
  };

  ngOnInit() {
  }

}
