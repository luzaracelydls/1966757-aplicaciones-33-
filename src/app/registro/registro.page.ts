import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private nav: NavController,
    private authService: AuthService,
    private toastController: ToastController
  ) { 
    this.registroForm = new FormGroup({
      email: new FormControl(),
      password : new FormControl()
    })
  }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const email = this.registroForm.value.email;
    const password = this.registroForm.value.password;

    this.authService.register(email, password)
      .then(() => {
        // Si se registra correctamente, navegar a la siguiente página
        this.nav.navigateForward('/seleccion-nombre');
      })
      .catch((error) => {
        // Si ocurre un error al registrar, mostrarlo en la consola
        console.error(error);
        this.presentToast('Usuario o contraseña invalido');
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




  navToHome(){
    this.nav.navigateForward('/home')
  }
}
