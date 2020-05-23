import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> =new EventEmitter();
  counter = 0;

  sendNotify(){
    alert("j")
    this.counter=this.counter+1;
    this.notifyParent.emit(this.counter);
    // console.log("counter",this.counter)
  }
  parentitem="jhjjkjkjjjjjjjjjjjjjj";
  constructor() { }

  ngOnInit() {
  }

}
