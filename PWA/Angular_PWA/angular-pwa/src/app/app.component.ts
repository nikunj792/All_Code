import { Component } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pwa';
  public age:number;
  public add:any;
  public land:any;
  public street:any;
  public mname:any;
 
  constructor(public dataService:DataService ){
    this.age =20;
    this.add = 'Meerapur';
    this.land = 'CBI';
    this.street = 'Default';
    this.mname = ''
  }

  public handleChildAge(e){
    this.age = e.target.value;
  }

  public handleParentStreet($e){
    this.street = $e.target.value;
  }

  public handleParent($e){
    if($e.target.name == 'add'){
    this.add = $e.target.value;
    }
    if($e.target.name == 'land'){
      this.land = $e.target.value;
      }
  }

  public handleCommon($e){
    this.add = $e;    
  }
}
