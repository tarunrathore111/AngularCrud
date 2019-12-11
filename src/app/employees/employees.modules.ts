import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule} from './employees-routing.modules'
import { HomeEmployeesComponent } from './home-employees.component';

@NgModule({
    declarations: [
      HomeEmployeesComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        EmployeesRoutingModule
    ],
  })
export class EmployeesModule {}