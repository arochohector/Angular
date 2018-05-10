import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { OldPasswordValidators } from './oldpassword.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent{
// Properties
  matchedPasswords = false;
  form
  //  = new FormGroup({
  //   oldPassword: new FormControl('', 
  //                                 Validators.required,
  //                               OldPasswordValidators.verifyOldPassword),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required)
  // }, {
    
  // });

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['', 
                    Validators.required,
                    OldPasswordValidators.verifyOldPassword
                  ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]      
    }, {
      validator: OldPasswordValidators.passwordsShouldMatch
    }
  );
  }
  
  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  onChange(){
    if (this.newPassword.value === this.confirmPassword.value)
      this.matchedPasswords = true;
    else
      this.matchedPasswords = false;
  }
}
