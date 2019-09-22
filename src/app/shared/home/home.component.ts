import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
   return this.authService.isLoggedIn;
  }

  constructor(
    private router: Router,
    private authService: AuthService) { }

  goToCustomers(e: Event): void {
    e.preventDefault();
    this.router.navigate(['customers']);
  }

  signUp(e: Event): void {
    e.preventDefault();
    this.router.navigate(['login/register-user']);
  }

}
