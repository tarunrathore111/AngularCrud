import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Employee} from '../Models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Department} from '../Models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', {static:false}) public createEmployeeForm : NgForm;
  previewPhoto = false;
  gender= "Male";
  employee: Employee;
  panelTitle:string;
  id: number;
  savedSuccess = false;

  departments : Department[] = [
    {id : 1, name: 'IT'},
    {id : 2, name: 'HR'},
    {id : 3, name: 'Admin'}
  ];
  

  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) {

    }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap =>{
       this.id = +parameterMap.get('id');
      this.getEmployee(this.id);
    });
  }

  private getEmployee(id : number){
if(id==0){
  this.employee={
    id:null,
    userName:null,
    password:null,
    gender:"Male",
    annualSalary:null,
    dateofBirth:null,
  };
  this.panelTitle="Create";
} else{
  this.employee={
    id:null,
    userName:null,
    password:null,
    gender:null,
    annualSalary:null,
    dateofBirth:null,
  };
  this.panelTitle="Edit";
  this.employee = Object.assign({},this._employeeService.getEmployeebyID(id));
}
  }
// saveEmployee(empForm: NgForm) : void{
//   // console.log(empForm.value);
//   console.log(empForm);
// saveEmployee(newemployee: Employee) : void{
//   // console.log(empForm.value);
//   console.log(newemployee);
// }

saveEmployee() : void{ 
 this._employeeService.save(this.employee, this.id).subscribe((data) => {this.savedSuccess=true;
  // this._router.navigate(['list']);
});
  // this._router.navigate(['list']);
  // this.savedSuccess=true;
}
}
