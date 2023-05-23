import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@angular/fire/storage';
@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
  musicUrl:string="";

  constructor(private nav:NavController,private storage:Storage) { }

  ngOnInit() {
  }

  navToInicioTab(){
    this.nav.navigateForward("/tabs/inicio-tab")
  }

 
}
