import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent   {

  constructor() { }
  @Input() list: string[];
  @Output() addEvent: EventEmitter<string> = new EventEmitter();

  add(item) {
    this.addEvent.emit(item);
  }
}
