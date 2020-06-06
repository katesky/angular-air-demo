import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartItems: string[] = [];

  list$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private cartItemsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('/assets/test-data/wine-list.json').subscribe((data: any) => {
      this.list$.next(data);
    });
  }
  addTocart(item: string) {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);

  }
  removeFromcart(index: any) {
    this.cartItems.splice(index, 1);
    this.cartItemsSubject.next(this.cartItems);
  }
}
