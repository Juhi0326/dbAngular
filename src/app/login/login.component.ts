import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.myForm.value);
    this.login();
  }

  login() {
    this.authService.login(`${this.myForm.value.userName}`, `${this.myForm.value.password}`);
    if (this.authService.redirectURL) {
      this.router.navigateByUrl(this.authService.redirectURL);
    } else {
      this.router.navigate(['/customers']);
    }

  }
}
