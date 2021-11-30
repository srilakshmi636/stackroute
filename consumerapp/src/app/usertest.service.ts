import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsertestService {

  user : User;

  constructor() {
    this.user=new User();
   }

   getuserName()
   {
     return this.user.username;
   }

   getPassword()
   {
     return this.user.password;
     
   }
}
