import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingcarService } from '../services/shoppingcar.service';
import { CommonModule } from '@angular/common';
import { Producto, ProductoCarrito } from '../Model/product';
import { ProductoService } from '../services/product.service';
@Component({
  selector: 'app-carrito',
  standalone:true,
  imports: [RouterLink, CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit{
  product: any;
  productlist: ProductoCarrito[]= [

  ];;

  //   addToCart(name, price) {
  //     cart.push({ name: name, price: price });
  //     renderCart();
  // }

  constructor(private cartService: ShoppingcarService, private producto: ProductoService  ) {}
  ngOnInit(): void {
    console.log('descargando lista');
    this.productlist = this.cartService.getlist();
  }
  deleteall(){
    this.cartService.deleteall();
    this.productlist = this.cartService.getlist();
  }

  delete(){
    this.cartService.delete(1);
    this.productlist = this.cartService.getlist();
  }

  pago(){

  }

  getproduct () {
    this.producto.getproduct();
  }

  getlist () {
    console.log('descargando lista');
    return this.cartService.getlist();
  }

}
