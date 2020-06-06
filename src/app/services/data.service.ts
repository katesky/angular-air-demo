
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly cartItemsSubject = new BehaviorSubject<string[]>([]);
  readonly cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  getData(): Observable<string[]> {
    return this.http.get<string[]>('/assets/test-data/wine-list.json');
  }
  addToCart(item: string) {
    this.cartItemsSubject.next([...this.cartItemsSubject.getValue(), item]);
  }
  removeFromCart(removeIndex: number) {
     const cartItemsClone = [...this.cartItemsSubject.getValue()];
     cartItemsClone.splice(removeIndex, 1);
     this.cartItemsSubject.next(cartItemsClone);
  }
}
