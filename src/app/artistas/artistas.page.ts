import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToSeleccionNombre(){
    this.nav.navigateForward('/seleccion-nombre')
  }

  navToInicioTab(){
    this.nav.navigateForward('/tabs')
  }
}
