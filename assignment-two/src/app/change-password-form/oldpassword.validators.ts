import { ValidationErrors, AbstractControl } from '@angular/forms';

export class OldPasswordValidators{
    static verifyOldPassword(control: AbstractControl) :  Promise<ValidationErrors | null>{
        return new Promise((resolve) =>{            
            if(control.value !== '1234')
                resolve({ verifyOldPassword: true});
            else
                resolve(null);
        });
    }  
    
    static passwordsShouldMatch(control: AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true};
        
        return null;
    }
}