import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../Model/product';
import { ShoppingcarService } from '../services/shoppingcar.service';

  @Component({
      selector: 'app-product-list',
      standalone: true,
      imports: [RouterLink],
      templateUrl: './product-list.component.html',
      styleUrls: ['./product-list.component.scss'],
  })
  export class ProductListComponent implements OnInit{
    product: any;
    total = 0;
    selectedProducts: Producto[] = [];
    productList: Producto[] = [ ];

  constructor(private cartService: ShoppingcarService) {}
    ngOnInit(): void {
      this.productList=this.cartService.getproduct()
    }

  addToCart(product: Producto): void {
      // this.selectedProducts.push(product);
      // console.log(this.selectedProducts);
      this.cartService.addproduct(product);
      //this.cartService.addToCart(product);
      // alert('Producto agregado al carrito');
    }
    removeFromCaty(product: Producto): void {
      // FIX: Corregir solo debe quitar un elemento del carrito
      // no todos los que tengan el mismo título
      this.selectedProducts = this.selectedProducts.filter(
        (actual) => actual.title != product.title
      );
      console.log(this.selectedProducts);
    }
}
