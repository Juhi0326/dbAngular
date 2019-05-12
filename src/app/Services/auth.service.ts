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
      this.currentUser = {
      userName: userName
    }
    }
  }

  logout(): void {
    this.currentUser = null;
  }
}
