import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService, Alert } from '../_alert';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService,
    private snackBar: MatSnackBar
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  public get currentUserValue(): User {
    console.log('currentUserValue check', this.currentUserSubject.value)
    return this.currentUserSubject.value;
  }
  
  login(user) {
    console.log('login')
    return this.http.post(`http://localhost:8080/api/auth/login`, user).subscribe(data => {
      sessionStorage.setItem('token', btoa('user' + ':' + 'password'));
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.router.navigate(['']);
      this.alertService.success('Logged-In Successfully'); // Alternative Alert Service
      this.snackBar.open('Logged-In Successfully', 'close', { duration: 4000 });
    },
    error => {
      this.alertService.error('Log-In Failed'); // Alternative Alert Service
      this.snackBar.open('Log-In Failed', 'close', { duration: 4000 });
    });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
