import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import 'hammerjs';

describe('UserService', () => {
  let service: UserService;
  let http: HttpClient;

  beforeEach(() => { TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('#register should return json value from observable',
    inject([HttpTestingController, UserService],
      (httpMock: HttpTestingController, service: UserService) => {
    let user: User;
    user = {
      id: 1,
      username: 'qwreqwer',
      password: 'qwerqwer',
      name: 'tony',
      email: 'asdf@asdf.asdf',
      role: 'admin',
      token: ''
    };

    service.register(user).subscribe(data => {
      console.log(data);
      expect(data[0].id).toBe(1);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/auth/register');
    console.log('req method:', req.request.method);
    
    expect(req.request.method).toEqual('POST');

    req.flush({data: {
      id: 1,
      username: 'qwreqwer',
      password: 'qwerqwer',
      name: 'tony',
      email: 'asdf@asdf.asdf',
      role: 'admin',
      token: ''
    }});
  }));
});
