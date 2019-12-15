import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-home-employees',
  templateUrl: './home-employees.component.html',
  styleUrls: ['./home-employees.component.scss']
})
export class HomeEmployeesComponent implements OnInit {
employee:Employee;
userName: string;
  constructor(private _router : Router, private _route : ActivatedRoute,
    private _employeeService:EmployeeService) { }
  ngOnInit() {
    if(localStorage.getItem('userToken')==null)
    {
      this._router.navigate(['/loginpage']);
    }
    else{
      this.userName = this._route.snapshot.params["userName"];
      this.employee= this._employeeService.getEmployeebyName(this.userName);
    }
  }

  LogOutFun(){
    localStorage.removeItem('userToken');
    this._router.navigate(['/loginpage']);
  }
}
