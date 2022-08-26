import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input() x:any;
  @Output() cartEvent = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(obj:any){
    //console.log(obj);
    this.cartEvent.emit(obj);
  }

}
