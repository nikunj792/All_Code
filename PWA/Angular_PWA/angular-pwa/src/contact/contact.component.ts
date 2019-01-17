import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  title = 'angular-contact';
public fname:any;
public lname:any;
public mobile:any;
@Input() public mname:any;
@Input() public age:any;
@Output() public ageChange = new EventEmitter<any>();
public handleFirstName(e){
this.fname = e.target.value
}

public handleLastName(e){
  this.lname = e.target.value
  }

public handleButton(){
  console.log('111111111', this.fname);
  console.log('222222222', this.lname);
  console.log('333333333', this.mobile);
}
}
