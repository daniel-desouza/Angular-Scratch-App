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

  getAll() {
    return this.http.get<User>(`localhost:4200/users`);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8080/api/auth/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`localhost:4200/users/${id}`);
  }
}
