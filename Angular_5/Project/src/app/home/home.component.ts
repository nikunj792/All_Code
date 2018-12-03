import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  value:number=0;
  inputText:string="";
  inputNumber:number;
  data=[];

  ngOnInit() {

  }

 handleButton(){
   this.data.push(this.inputText);
   this.value = this.inputNumber;

 }
}
