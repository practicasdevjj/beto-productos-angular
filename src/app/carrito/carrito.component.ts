import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

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

}
