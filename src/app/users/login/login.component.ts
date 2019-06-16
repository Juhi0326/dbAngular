import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }
  /* onSubmit() {
    this.login();
  } */

  /* login() {
    if (this.myForm.invalid) {
      return;
    } else {
      this.authService.login(`${this.myForm.value.userName}`, `${this.myForm.value.password}`);
      if (this.authService.redirectURL) {
        this.router.navigateByUrl(this.authService.redirectURL);
      } else {
        this.router.navigate(['']);
      }

    }

  }*/
}
