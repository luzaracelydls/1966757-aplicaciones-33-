import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-playlist-est',
  templateUrl: './playlist-est.page.html',
  styleUrls: ['./playlist-est.page.scss'],
})
export class PlaylistEstPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  
  navToTabs(){
    this.nav.navigateForward('/tabs/inicio-tab')
  }

}
