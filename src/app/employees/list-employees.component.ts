import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
//  employees:Employee[]=[
//  { 
//    id: 1,
//   name:'Tarun',
//   gender:'Male',
//   phoneNumber:70420727288
//  },
//  { 
//    id: 2,
//   name:'Annu',
//   gender:'Female',
//   phoneNumber:70420727288
//  },
//  ];

    employees:Employee[];
    dataFromChild:Employee;
    public errorMsg;
  constructor(private _employeeService : EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {
      this.employees= this._route.snapshot.data['employeeList'];
     }

  ngOnInit() {
  //  this._employeeService.getEmployee().subscribe(
  // (employee) => this.employees = employee,
  //  );
  }
  handleNotify(eventData: Employee){
    this.dataFromChild = eventData;
  }
  onClick(employeeID : number){
    this._router.navigate(['/employees', employeeID]);
  }
}
