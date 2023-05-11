import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: Auth) { }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }
}



