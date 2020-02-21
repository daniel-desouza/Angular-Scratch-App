import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from './../../_services/user.service';
import { User } from 'src/app/_models/user';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(60)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(40)])],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
          this.alertService.success('Registration successful');
        },
        error => {
          if (error.error.message) {
            this.alertService.error(error.error.message);
          } else {
            this.alertService.error('Registration was unsuccessful');
          }
          this.loading = false;
        });
  }
}
