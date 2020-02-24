import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', username: '1.0079', email: 'H'},
  {id: 2, name: 'Helium', username: '4.0026', email: 'He'},
  {id: 3, name: 'Lithium', username: '6.941', email: 'Li'},
  {id: 4, name: 'Beryllium', username: '9.0122', email: 'Be'},
  {id: 5, name: 'Boron', username: '10.811', email: 'B'},
  {id: 6, name: 'Carbon', username: '12.0107', email: 'C'},
  {id: 7, name: 'Nitrogen', username: '14.0067', email: 'N'},
  {id: 8, name: 'Oxygen', username: '15.9994', email: 'O'},
  {id: 9, name: 'Fluorine', username: '18.9984', email: 'F'},
  {id: 10, name: 'Neon', username: '20.1797', email: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
