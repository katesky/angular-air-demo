import { Component,  Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent  {
  @Input() list: string[];
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }


  remove(index) {
    this.removeEvent.emit(index);
  }


}
