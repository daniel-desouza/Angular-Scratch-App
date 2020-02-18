import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let url = 'http://localhost:8080/login';
    let result = this.http.post<Observable<boolean>>(url, {
      username: 'user',
      password: 'password'
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', btoa('user:password'));
        this.router.navigate(['']);
      } else {
        alert('Authentication Failed');
      }
    });
  }
}
