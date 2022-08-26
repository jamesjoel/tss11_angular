import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allPro : any;
  cartArr :any[]=[];
  constructor(
    private _http : HttpClient
  ) {

    this._http.get<any>("http://localhost:3000/api/product").subscribe(result=>{
      // console.log(result);
      this.allPro = result;
    })

   }

  ngOnInit(): void {
  }

  cartEvent(obj:any){
    // console.log(obj);
    this.cartArr.push(obj);
  }

}
