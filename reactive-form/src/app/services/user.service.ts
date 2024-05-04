import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, 'Salman', 'sal', '1234'),
    new User(2, 'Superadmin', 'sup', '1234'),
    new User(3, 'Admin', 'adm', '1234'),
    new User(4, 'Moderator', 'mod', '1234'),
  ]

}
