import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  email: string = '';
  password: string = '';

  constructor() { 
  }
}
