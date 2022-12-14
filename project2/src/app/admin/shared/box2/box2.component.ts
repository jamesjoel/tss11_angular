import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {

  @Output() myEvent = new EventEmitter;

  name = "Aman";
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    // console.log(this.name);
    this.myEvent.emit(this.name);
  }

}
