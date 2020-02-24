import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

export interface PeriodicElement {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', username: 'test 1', email: 'H'},
  {id: 2, name: 'Helium', username: 'test 2', email: 'He'},
  {id: 3, name: 'Lithium', username: 'test 3', email: 'Li'},
  {id: 4, name: 'Beryllium', username: 'test 4', email: 'Be'},
  {id: 5, name: 'Boron', username: 'test 5', email: 'B'},
  {id: 6, name: 'Carbon', username: 'test 6', email: 'C'},
  {id: 7, name: 'Nitrogen', username: 'test 7', email: 'N'},
  {id: 8, name: 'Oxygen', username: 'test 8', email: 'O'},
  {id: 9, name: 'Fluorine', username: 'test 9', email: 'F'},
  {id: 10, name: 'Neon', username: 'test 10', email: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = ELEMENT_DATA;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers();
    // this.dataSource = this.userService.getUsers();
  }

}
