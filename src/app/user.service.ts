import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users;
  constructor() { }
  getUsers(users)  {
    this.users = users;
    console.log('users', users);
  }
  renderUsers() {
    return this.users;
  }
}
