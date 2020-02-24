import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post(`http://localhost:8080/api/auth/register`, user);
  }

  getUsers() {
    return this.http.get(`http://localhost:8080/api/auth/users`).subscribe();
  }
}
