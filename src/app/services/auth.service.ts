import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from '@angular/fire/auth';
import { LoginData } from '../login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth ) { }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  
  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}



