import { Component, OnInit } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm : FormGroup;
  check = false;
  msg="";
  constructor(
    private _http : HttpClient,
    private _fb : FormBuilder,
    private _router : Router
  ) {
    this.loginFrm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.loginFrm.value);
    if(this.loginFrm.invalid){
      this.check = true;
    }else{

      this._http.post<any>(environment.apiUrl+"login", this.loginFrm.value).subscribe(result=>{
          
          if(result.success){
            this._router.navigate(["/"]);
          }else{

            if(result.errorType == 1){
              this.msg = "This Email id is not Registered !";
            }
            if(result.errorType == 2){
              this.msg = "This Password is not Correct !";
            }
          }
        
      })
    }
  }
}
