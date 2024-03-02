import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product: any; // Definir la variable product

  constructor(private cartService: CartService) { }

  // addToCart(product: any): void {
    // this.cartService.addToCart(product);
  //   alert('Producto agregado al carrito');
  // }
}
