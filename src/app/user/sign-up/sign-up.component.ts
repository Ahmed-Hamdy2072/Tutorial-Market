import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  usrForm!: FormGroup
  /*  users: any = [] */
  invalidmail: boolean = true
  constructor(private fb: FormBuilder, private auth: AuthService, router: Router) {

  }
  ngOnInit(): void {
    this.createForm()
    /* this.getusers() */

  }
  createForm() {
    this.usrForm = this.fb.group({
      userName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    })
  }
  /*   existEmailValidator(users: any[]): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        let emailVal: string = control.value
        if (emailVal.length > 0 ) {
          return null

        } else {
          let ValidationErrors = { 'existmail': { "value": emailVal } }
          let foundEmail = this.users.Email.includes(emailVal);
          return (foundEmail) ? null : ValidationErrors
        }


      }
    } */
  submit() {
    const model = {
      userName: this.usrForm.value.userName,
      Email: this.usrForm.value.eMail,
      Password: this.usrForm.value.password,
      confirmPassword: this.usrForm.value.confirmPassword,
    }

    this.auth.createUser(model).subscribe(res => {
      alert("Success")
      window.history.back()
    });

  }


}
