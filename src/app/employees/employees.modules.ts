import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule} from './employees-routing.modules'
import { HomeEmployeesComponent } from './home-employees.component';
import { HomeCardviewEmployeesComponent } from './home-cardview-employees.component';
// import {SelectValidatorDirective} from '../Shared/select-validator.directive';

@NgModule({
    declarations: [
      HomeEmployeesComponent,
      HomeCardviewEmployeesComponent
      // SelectValidatorDirective
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        EmployeesRoutingModule
    ],
  })
export class EmployeesModule {}