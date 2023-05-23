import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-libreria-tab',
  templateUrl: './libreria-tab.page.html',
  styleUrls: ['./libreria-tab.page.scss'],
})
export class LibreriaTabPage implements OnInit {

  constructor(private nav: NavController) { }
 
  
  ngOnInit() {
  }
  
  navToPerfil(){
    this.nav.navigateForward('/perfil')
  }


  navToLikes(){
    this.nav.navigateForward('/likes')
  }
}
