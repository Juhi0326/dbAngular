import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Services/auth.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = this.fb.group({
    userName: [''],
    password: ['']
  });


  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.myForm.value);
  }

  /* login() {
  this.authService.login()
  }; */
}
