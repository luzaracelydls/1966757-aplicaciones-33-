import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-buscar-tab',
  templateUrl: './buscar-tab.page.html',
  styleUrls: ['./buscar-tab.page.scss'],
})
export class BuscarTabPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToPop(){
    this.nav.navigateForward('/pop')
  }

  navToIndie(){
    this.nav.navigateForward('/indie')
  }

  navToRock(){
    this.nav.navigateForward('/rock')
  }
}
