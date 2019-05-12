import { Injectable } from '@angular/core';
import { User } from '../cust-modell';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectURL: string;

  get isLoggedIn(): boolean {
    console.log(this.currentUser);
    return !!this.currentUser;

  }
  constructor() { }

  login(userName: string, password: string): void {
    if (userName || password) {
      this.currentUser = {
        userName: userName,
        password: password
      };
    }
    console.log(userName, password);
  }

  logout(): void {
    this.currentUser = null;
  }
}
