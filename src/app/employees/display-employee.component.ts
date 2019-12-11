import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee : Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor(private _router : Router, private _employeeService : EmployeeService) { }

  ngOnInit() {
  }
  handleClick() {
    this.notify.emit(this.employee);
  }

  getEmployeeName(): string {
 return this.employee.userName;
  }
  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id]);
  
  }
  editEmployee(){
    this._router.navigate(['edit/', this.employee.id]);
  }
  deleteEmployee(){
    this._employeeService.deleteEmplyee(this.employee.id).subscribe((data) => {
      this.getEmployees();
    });
  }
  getEmployees(){
    return this._employeeService.getEmployee().subscribe((data)=>{data});
  }
}
