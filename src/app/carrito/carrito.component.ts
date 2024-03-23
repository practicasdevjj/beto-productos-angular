import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingcarService } from '../services/shoppingcar.service';
@Component({
  selector: 'app-carrito',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  product: any;

  //   addToCart(name, price) {
  //     cart.push({ name: name, price: price });
  //     renderCart();
  // }

  constructor(private cartService: ShoppingcarService) {}
  deletecart(){
    this.cartService.deletecart();
  }

  delete(){
    this.cartService.delete(1);
  }

  pago(){

  }
}
