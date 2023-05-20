import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})



export class ArtistasPage implements OnInit {
  selectedImage: number = -1;

  constructor(private nav:NavController) { }
 
  ngOnInit() {
  }

  navToSeleccionNombre(){
    this.nav.navigateForward('/seleccion-nombre')
  }

  navToInicioTab(){
    this.nav.navigateForward('/tabs')
  }

  highlightImage(imageNumber: number){
    if (this.selectedImage == imageNumber){
        this.selectedImage = -1;}
      else{
        this.selectedImage = imageNumber
      }
    }
  }



