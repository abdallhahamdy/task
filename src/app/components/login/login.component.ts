import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm!:FormGroup
  // public loginForm= new FormGroup({
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   password: new FormControl('')
  // })
  // get email(){return this.loginForm.get('email')}
  // constructor(private formBuilder : FormBuilder) {
  // }
  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     email:[''],Validators.email
  //   })

  // }
  // get email(){return this.loginForm.get('email')}



}
