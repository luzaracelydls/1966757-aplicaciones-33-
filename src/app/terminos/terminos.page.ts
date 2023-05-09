import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  constructor(private nav:NavController) { }

  navToBack(){
    this.nav.navigateForward('/seleccion-nombre')
  }

  ngOnInit() {
  }

}
