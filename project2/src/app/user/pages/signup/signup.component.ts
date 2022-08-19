import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import  { Router } from '@angular/router';
import { checkPass, checkNum } from '../../helpers/custome.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  allCity : any[]=[];
  check=false;


  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient,
    private _router : Router
  ) {

    this.signupForm = this._fb.group({
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      gender : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required]
    },{
      validator : [checkPass(), checkNum()]
    });

    this._http.get<any>(environment.apiUrl+"city").subscribe(result=>{
      this.allCity = result;
    })

   }

  ngOnInit(): void {
  }


  submit(){
    if(this.signupForm.invalid){
      this.check = true;
    }else{

      this._http.post<any>(environment.apiUrl+"user", this.signupForm.value).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/login"]);
      })
    }
  }
}
