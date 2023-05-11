
import { NavController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  form!: FormGroup;

  constructor(private nav:NavController, private fb : FormBuilder) { }
  

  ngOnInit() :void {
    this.form = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
    });
  } 
  
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    this.formData.emit(this.form.value);
  }


  navToHome(){
    this.nav.navigateForward('/home')
  }

  navToseleccionNombre(){
    this.nav.navigateForward('/seleccion-nombre')
  }

}
