import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToInicioTab(){
    this.nav.navigateForward("/tabs/inicio-tab")
  }
}
