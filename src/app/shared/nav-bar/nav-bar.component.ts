import { Component} from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authSevice: AuthService, private router: Router) { }

  isLoggedIn() {
    return this.authSevice.isLoggedIn;
  }

}
