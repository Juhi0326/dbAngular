import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './users/login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
   return this.checkLoggedin(route.path);
  }

  constructor(
    private authService: AuthService,
    private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedin(state.url);
  }
  checkLoggedin(url: string): boolean {
    console.log(url);
    if (this.authService.isLoggedIn) {
      console.log('belogoltam');
      return true;
    }
    this.authService.redirectURL = url;
    this.router.navigate(['login']);
    console.log('nem sikerült');
    return false;
  }
}
