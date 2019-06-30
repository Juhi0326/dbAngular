import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  signUp() {
    this.router.navigate(['login/register-user']);
  }

  forgotPassword() {
    this.router.navigate(['login/forgot-password']);
  }
}
