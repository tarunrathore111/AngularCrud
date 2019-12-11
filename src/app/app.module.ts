import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {ConfirmEqualValidatorDirective} from './Shared/confirm-equal-validator.directive'
import {HttpClientModule} from '@angular/common/http'
// import {BrowserAnimationsModule} from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { LoginpageComponent } from './employees/loginpage.component';
// import { HomeEmployeesComponent } from './employees/home-employees.component';
import { CreateEmployeeCanDeactivateGaurdSerive } from './employees/create-employee-can-deactivate.service'
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { EmployeesModule } from './employees/employees.modules';
const appRoutes : Routes = [
  {path:'list', 
  component:ListEmployeesComponent,
  resolve: {employeeList:EmployeeListResolverService}},
  {path:'edit/:id', component:CreateEmployeeComponent,
canDeactivate: [CreateEmployeeCanDeactivateGaurdSerive]
},
  {path:'employees/:id', component:EmployeeDetailsComponent},
  {path:'', redirectTo:'/list', pathMatch:'full'},
  {path:'loginpage', component:LoginpageComponent},
  // {path:'home', component: HomeEmployeesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    LoginpageComponent,
    // HomeEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    EmployeesModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGaurdSerive, EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
