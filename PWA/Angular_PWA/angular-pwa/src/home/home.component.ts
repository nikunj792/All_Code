import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angular-pwa';
  public name:any;
  @Input() public address:any;
  @Input() public landmark:any;
  @Input() public street:any;
  @Output() public changeStreet = new EventEmitter<any>();
  // @Output() public changeLand = new EventEmitter<any>();
  @Output() public change1 = new EventEmitter<any>();
  public add:any;
  public land:any;

  constructor(){
    this.name = 'Nikunj';
  }
  public ngOnInit () {  
  }

  // public handleAddButton(){
  //   this.changeAdd.emit(this.add1);
  // }
  
  // public handleLandButton(){
  //   this.changeLand.emit(this.land1);
  // }

  public handleStreet($event){   
    this.changeStreet.emit($event);
  }
  public handleInputs(){
    console.log(this.add, this.land)   
    this.change1.emit(this.add);
  }
}
