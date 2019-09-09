import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MessageService } from './shared/messages/message.service';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    public messageService: MessageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {

      this.messageService.addMessage('You are alredy registrated!');
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
      document.documentElement.scrollTop = 0;
      return false;
    }
    return true;
  }

}
