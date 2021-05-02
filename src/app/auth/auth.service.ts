import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated: boolean;

  constructor() { }

  login(){
    this._userIsAuthenticated = true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }


  get userIsAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }
}
