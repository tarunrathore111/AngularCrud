import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';
import { Injectable } from '@angular/core';
@Injectable()
export class CreateEmployeeCanDeactivateGaurdSerive implements CanDeactivate<CreateEmployeeComponent>{
    canDeactivate(component: CreateEmployeeComponent):  boolean{
        if(component.createEmployeeForm.dirty)
        {
            return confirm('are you sure');
        }
        return true;
    }
}