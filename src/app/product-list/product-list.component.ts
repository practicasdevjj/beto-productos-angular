import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  product: any; 
  total= 0;

  constructor(private cartService: CartService) { }

  addToCart(product: any): void {
    this.total+=1
    //this.cartService.addToCart(product);
   // alert('Producto agregado al carrito');
  }
}
