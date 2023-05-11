import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService
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
        this.navCtrl.navigateForward('/seleccion-nombre');
      })
      .catch((error) => {
        // Si ocurre un error al registrar, mostrarlo en la consola
        console.error(error);
      });
  }


  navToHome(){
    this.navCtrl.navigateForward('/home')
  }
}
