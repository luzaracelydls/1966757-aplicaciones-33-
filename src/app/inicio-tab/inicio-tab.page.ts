import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-tab',
  templateUrl: './inicio-tab.page.html',
  styleUrls: ['./inicio-tab.page.scss'],
})
export class InicioTabPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToReproductor(){
    this.nav.navigateForward("/reproductor")
  }

  navToPlaylistEj(){
    this.nav.navigateForward("/playlist-ej")
  }

  navToPlaylistDor(){
    this.nav.navigateForward("/playlist-dor")
  }

  navToPlaylistEst(){
    this.nav.navigateForward("/playlist-est")
  }

  navToPlaylistFiesta(){
    this.nav.navigateForward("/playlist-fiesta")
  }


}
