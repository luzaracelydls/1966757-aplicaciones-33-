import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilPage } from '../perfil/perfil.page';

@Component({
  selector: 'app-libreria-tab',
  templateUrl: './libreria-tab.page.html',
  styleUrls: ['./libreria-tab.page.scss'],
})
export class LibreriaTabPage implements OnInit {

  constructor(private nav: NavController) { }
 
  
  ngOnInit() {
  }

}
