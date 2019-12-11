import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-employees',
  templateUrl: './home-employees.component.html',
  styleUrls: ['./home-employees.component.scss']
})
export class HomeEmployeesComponent implements OnInit {

  constructor(private _router : Router) { }
  ngOnInit() {
    if(localStorage.getItem('userToken')==null)
    {
      this._router.navigate(['/loginpage']);
    }
  }

  LogOutFun(){
    localStorage.removeItem('userToken');
    this._router.navigate(['/loginpage']);
  }
}
