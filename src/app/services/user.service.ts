import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { UserDataServiceService } from './user-data-service.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
