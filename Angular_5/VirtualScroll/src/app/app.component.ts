 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VirtualScroll';
  scrollingItems: string[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      var imageName;
      if(i<10){
        imageName = `${i}.jpg`;
      }
      else
       imageName = `10.jpg`;
      this.scrollingItems.push(imageName);
    }

  }
}
