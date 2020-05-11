import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngHouston-demo';
  list: string[] = [];

  add(candy:string){
    this.list.push(candy)
  }
  remove(index){
    this.list.splice(index, 1);
  }
}
