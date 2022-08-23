import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  headers : any;
  constructor(
    private _http : HttpClient
  ) {

    let token = localStorage.getItem("token");
    this.headers = new HttpHeaders({
      Authorization : `${token}`
    })

   }

   getUserProfile(url:any){
      return this._http.get<any>(url, { headers : this.headers });
   }

}
