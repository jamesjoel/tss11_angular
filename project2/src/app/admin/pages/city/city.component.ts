import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any[]=[];
  constructor(
    public _http : HttpClient
  ) {

    this._http.get<any>(environment.apiUrl+"city").subscribe(data=>{
      // console.log(result);
      this.allCity = data;
    });

   }

  ngOnInit(): void {
  }

  demo(){
    this._http.get<any>("https://jsonplaceholder.typicode.com/todos").subscribe(result=>{
      console.log(result)
    })
  }

}
