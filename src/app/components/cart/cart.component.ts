import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  @Input() list = [];
  @Output() removeEvent = new EventEmitter();
  constructor() {}

  remove(index) {
    this.removeEvent.emit(index);
  }
}
