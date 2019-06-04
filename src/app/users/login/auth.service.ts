import { Injectable } from '@angular/core';
import { User } from './../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectURL: string;

  get isLoggedIn(): boolean {

    return !!this.currentUser;

  }

  login(userName: string, password: string): void {
    if (userName || password) {
      this.currentUser = {
        userName: userName,
        password: password
      };
    }
  }

  logout(): void {
    this.currentUser = null;
  }
}