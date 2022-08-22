import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router : Router
  ) { }

  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}
