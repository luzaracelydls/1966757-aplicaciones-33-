import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-playlist-ej',
  templateUrl: './playlist-ej.page.html',
  styleUrls: ['./playlist-ej.page.scss'],
})
export class PlaylistEjPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToTabs(){
    this.nav.navigateForward('/tabs/inicio-tab')
  }
}
