import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { checkNum } from '../../helpers/custome.validation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  signupForm : FormGroup;
  allCity : any[]=[];
  check=false;
  constructor(
    private _fb : FormBuilder,
    private _http : HttpClient,
    private _token : TokenService,
    private _router : Router
  ) {
    this.signupForm = this._fb.group({
      _id : [],
      full_name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : [""],
      address : ["", Validators.required],
      gender : ["", Validators.required],
      city : ["", Validators.required],
      contact : ["", Validators.required],
      __v : []
    },{
      validator : [checkNum()]
    });

   


   

    this._http.get<any>(environment.apiUrl+"city").subscribe(result=>{
      this.allCity = result;
    })
    this._token.getUserProfile("http://localhost:3000/api/user").subscribe(user=>{
      // console.log(result);

      
      this.signupForm.setValue(user);
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.signupForm.invalid){
      this.check = true;
    }else{
      this._http.post<any>("http://localhost:3000/api/user/update", this.signupForm.value).subscribe(result=>{
        // console.log("hello");
        this._router.navigate(["/my-account"]);
      })      
    }
  }

}
