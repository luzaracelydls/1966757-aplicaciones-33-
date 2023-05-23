
import { NavController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
 
  loginForm : FormGroup;
  

  constructor(private nav:NavController, 
    private fb : FormBuilder,
    private authService: AuthService,
    private toastController: ToastController
    ) {
      this.loginForm = new FormGroup({
        email : new FormControl(),
        password : new FormControl()
      })
     }
  

     ngOnInit() {
      this.loginForm = new FormGroup({
        email: new FormControl('', Validators.email),
        password: new FormControl('', Validators.required)
      });
    }

  navToHome(){
    this.nav.navigateForward('/home')
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password)
      .then(() => {
        // Si se registra correctamente, navegar a la siguiente página
        this.nav.navigateForward('/tabs/buscar-tab');
      })
      .catch((error) => {
        // Si ocurre un error al registrar, mostrarlo en la consola
        console.error(error);
        this.presentToast('Usuario o contraseña incorrecto');
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000, // Duración en milisegundos
      position: 'middle' // Posición del Toast en la pantalla
    });
    toast.present();
  }

}
