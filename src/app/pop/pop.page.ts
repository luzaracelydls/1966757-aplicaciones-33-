import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pop',
  templateUrl: './pop.page.html',
  styleUrls: ['./pop.page.scss'],
})
export class PopPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  navToTabs(){
    this.nav.navigateForward('/tabs/buscar-tab')
  }
}
