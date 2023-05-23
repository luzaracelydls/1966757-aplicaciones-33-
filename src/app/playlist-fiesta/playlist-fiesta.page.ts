import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-playlist-fiesta',
  templateUrl: './playlist-fiesta.page.html',
  styleUrls: ['./playlist-fiesta.page.scss'],
})
export class PlaylistFiestaPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToTabs(){
    this.nav.navigateForward('/tabs/inicio-tab')
  }
}
