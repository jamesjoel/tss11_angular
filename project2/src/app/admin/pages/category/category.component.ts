import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name:any;
  constructor() { }

  ngOnInit(): void {
  }

  come(x:any){
    // console.log(x);
    this.name = x;
  }

}
