import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

describe('UserService', () => {
  let service: UserService;
  let http: HttpClient;

  beforeEach(() => { service = new UserService(http); });

  // it('#register should return json value from observable', () => {
    // let user: User;
    // user = {
    //   id: 1,
    //   username: 'qwreqwer',
    //   password: 'qwerqwer',
    //   name: 'tony',
    //   email: 'asdf@asdf.asdf',
    //   role: 'admin',
    //   token: ''
    // }

    // (done: DoneFn) => {
    //   service.getObservableValue().subscribe(value => {
    //     expect(value).toBe('observable value');
    //     done();
    //   });

    // expect(service.register(user)).toBeTruthy();

  // });
});
