import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { UserDataServiceService } from '../services/user-data-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-contra',
  templateUrl: './registro-contra.page.html',
  styleUrls: ['./registro-contra.page.scss'],
})
export class RegistroContraPage implements OnInit {

  formReg : FormGroup;

  constructor(private nav:NavController,private userService: UserService, private userDataService: UserDataServiceService) { 
    this.formReg = new FormGroup({
      password : new FormControl()
    })
  }
  
  navToRegistro(){
    this.nav.navigateForward('/registro')
  }

  onSubmit(){
    // Guardar la contraseña en el servicio UserDataService
    this.userDataService.password = this.formReg.value.password;
    this.nav.navigateForward('/seleccion-nombre'); // Redirigir a la página de selección de nombre
  }

  ngOnInit() {
  }

}
