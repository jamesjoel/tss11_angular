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
    private _http : HttpClient
  ) {

    this._http.get<any>(environment.apiUrl+"city").subscribe(result=>{
      // console.log(result);
      this.allCity = result;
    });

   }

  ngOnInit(): void {
  }

}
