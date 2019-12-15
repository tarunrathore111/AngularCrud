import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [{ 
        provide: NG_VALIDATORS, 
        useExisting: SelectValidatorDirective, 
        multi: true 
    }]

})

export class SelectValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
       return control.value === '-1' ? { 'defaultSelected': true } : null;
    }
}