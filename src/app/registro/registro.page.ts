import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserDataServiceService } from '../services/user-data-service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formReg : FormGroup;

  constructor(private nav:NavController,private userDataService: UserDataServiceService) { 
    this.formReg = new FormGroup({
      email : new FormControl()
    })
  }
  
  navToHome(){
    this.nav.navigateForward('/home')
  };

  navToContra(){
    this.userDataService.email = this.formReg.value.email;
    this.nav.navigateForward('/registro-contra')
  };
  


  ngOnInit() {
  }

  

}
