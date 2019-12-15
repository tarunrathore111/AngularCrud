import { Component, OnInit } from '@angular/core';
import {Employee} from '../Models/employee.model';
import {Login} from '../Models/login.model';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  employee: Employee;
  login:Login;
  isLoginError: boolean = false;
  constructor(private _employeeService: EmployeeService, private _router:Router) { }

  ngOnInit() {
  }
  validateUser(userName, password) {
    debugger;
    this._employeeService.validateUser(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken', data.access_token);
      this._router.navigate(['/home/',userName]);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
