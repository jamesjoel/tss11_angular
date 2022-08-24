import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myForm : FormGroup;
  name : string = "Amar";
  x:any;
  y:any;
  constructor(
    private _fb : FormBuilder
  ) { 
    this.myForm = this._fb.group({
      x : []
    })
  }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.myForm.value);
    this.y = this.x;
  }
}
