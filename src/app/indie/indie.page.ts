import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-indie',
  templateUrl: './indie.page.html',
  styleUrls: ['./indie.page.scss'],
})
export class IndiePage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToTabs(){
    this.nav.navigateForward('/tabs/buscar-tab')
  }
}
