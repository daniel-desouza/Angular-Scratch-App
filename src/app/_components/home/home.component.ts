import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

export interface UsersArray {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  dataSource;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
    this.dataSource = this.userService.getUsers();
  }

}
