import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
  createUser(model: any) {
    return this.http.post("http://localhost:3000/Users", model)
  }
  login(model: any) {
    return this.http.post("http://localhost:3000/Users", model)
  }




}
