import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-rock',
  templateUrl: './rock.page.html',
  styleUrls: ['./rock.page.scss'],
})
export class RockPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToTabs(){
    this.nav.navigateForward('/tabs/buscar-tab')
  }
}
