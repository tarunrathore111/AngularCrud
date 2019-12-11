import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEmployeesComponent } from './home-employees.component';
const homeRouting: Routes = [
    {path:'home', component: HomeEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRouting)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }