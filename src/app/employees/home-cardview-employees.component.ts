import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-home-cardview-employees',
  templateUrl: './home-cardview-employees.component.html',
  styleUrls: ['./home-cardview-employees.component.scss']
})
export class HomeCardviewEmployeesComponent implements OnInit {
@Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
