import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Services/auth.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  constructor(private authSevice: AuthService) { }

  ngOnInit() {

  }

  isLoggedIn() {
    return this.authSevice.isLoggedIn;
  }

  logout() {
    this.authSevice.logout();
  }

}
