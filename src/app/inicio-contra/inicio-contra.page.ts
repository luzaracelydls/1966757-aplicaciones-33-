import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-contra',
  templateUrl: './inicio-contra.page.html',
  styleUrls: ['./inicio-contra.page.scss'],
})
export class InicioContraPage implements OnInit {

  constructor(private nav:NavController) { }

  navToHome(){
    this.nav.navigateForward('/registro')
  }

  

  ngOnInit() {
  }

}
