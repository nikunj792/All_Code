import { Component } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Subjects';
  t:any;
public handler = new Subject();
clickMethod(){
  setTimeout(()=>{this.handler.next('Hi I am Subject');},2000)
}

constructor(){
  this.handler.subscribe((data)=>this.t=data);
}

}
