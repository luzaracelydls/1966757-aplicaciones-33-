import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlist-dor',
  templateUrl: './playlist-dor.page.html',
  styleUrls: ['./playlist-dor.page.scss'],
})
export class PlaylistDorPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToTabs(){
    this.nav.navigateForward('/tabs/inicio-tab')
  }
}
