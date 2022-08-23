import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user:any;
  constructor(
    private _token : TokenService
  ) {

    

    // this._http.get<any>("http://localhost:3000/api/user", { headers : headers }).subscribe(result=>{
    //   // console.log(result);
    //   this.user = result;
    // })
    this._token.getUserProfile("http://localhost:3000/api/user").subscribe(result=>{
      this.user =result;
    })

   }


  ngOnInit(): void {
  }

}
