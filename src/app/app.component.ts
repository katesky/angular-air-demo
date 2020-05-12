import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Air-demo';
  list: string[] = [];

  add(item: string) {
    this.list.push(item);
  }
  remove(index) {
    this.list.splice(index, 1);
  }
}
