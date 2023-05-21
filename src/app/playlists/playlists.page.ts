import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToInicioTab(){
    this.nav.navigateForward("/tabs/inicio-tab")
  }

}
