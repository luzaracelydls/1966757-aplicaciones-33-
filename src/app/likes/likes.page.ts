import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {
  items = [];
  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  navToLibreriaTab(){
    this.nav.navigateForward('/tabs/libreria-tab')
  }

}
