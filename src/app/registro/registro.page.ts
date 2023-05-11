import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {



  constructor(private nav:NavController,private auth:AuthService){
  }

 
  navToHome(){
    this.nav.navigateForward('/home')
  };
  
  navToSeleccionNombre(){
    this.nav.navigateForward('/seleccion-nombre')
  }
  

  ngOnInit() {
  }

  

}
