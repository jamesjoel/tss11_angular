import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  
  @Input() cName:any;
  @Input() x:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
