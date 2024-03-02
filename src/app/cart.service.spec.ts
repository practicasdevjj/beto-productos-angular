import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];

  constructor() { }

  addToCart(product: any): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}
