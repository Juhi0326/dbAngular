import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../users/login/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  constructor(private authSevice: AuthService, private router: Router) { }

  ngOnInit() {

  }

  isLoggedIn() {
    return this.authSevice.isLoggedIn;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authSevice.logout();
  }

}
