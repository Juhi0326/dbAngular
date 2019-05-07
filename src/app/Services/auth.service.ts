import { Injectable } from '@angular/core';
import { User } from '../cust-modell';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;

  }
  constructor() { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
      };
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
