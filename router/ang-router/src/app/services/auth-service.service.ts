import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  userService: UserService = inject(UserService);
  constructor() { }

  login(useraname: string, password: string){
    let user = this.userService.users.find(u => u.username.toLowerCase() === useraname
    && u.password === password);

    if(user){
      this.isLoggedIn = true;
      return user;
    }
    return null;
  }

  logout(){
    this.isLoggedIn = false;
  }

  isAuthenticated() : boolean{
    return this.isLoggedIn;
  }
}
