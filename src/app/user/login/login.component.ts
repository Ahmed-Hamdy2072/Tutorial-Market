import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  users: any[] = []
  admins: any[] = []
  constructor(private fb: FormBuilder, router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {

    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      eMail: ["", Validators.required, Validators.email],
      password: ["", Validators.required]
    })
  }

  Submit() {
    const model = {
      email: this.loginForm.value.eMail,
      Password: this.loginForm.value.password
    }
    this.authService.login(model).subscribe(res => {
      alert("Success")
      window.history.back()
    })
  }
  model(model: any) {
    throw new Error('Method not implemented.');
  }
}



