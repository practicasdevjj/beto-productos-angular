import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../Model/product';
import { ShoppingcarService } from '../services/shoppingcar.service';
import { ProductoService } from '../services/product.service';

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
    totalProducts: number = 0;
    productList: Producto[] = [ ];

  constructor(private cartService: ShoppingcarService,private producto: ProductoService) {}
    ngOnInit(): void {
      this.sumaProductos()
      this.productList=this.producto.getproduct()
    }

  addToCart(product: Producto): void {
      // this.selectedProducts.push(product);
      // console.log(this.selectedProducts);
      this.cartService.addproduct(product);
      //this.cartService.addToCart(product);
      // alert('Producto agregado al carrito');
      this.sumaProductos()
    }
    removeFromCaty(product: Producto): void {
      // FIX: Corregir solo debe quitar un elemento del carrito
      // no todos los que tengan el mismo título
      // this.selectedProducts = this.selectedProducts.filter(
      //   (actual) => actual.title != product.title
      // );
      this.cartService.delete(product.id);
      // console.log(this.selectedProducts);
      this.sumaProductos()
    }
    //obtener los prodctos 
    sumaProductos() {
      const TotalP = this.cartService.countproduct() 
      const values = Object.values(TotalP) as number[];
      // let total = 0;
      // for (let  value of values) {
      //   total = total + (value as number)
      // }
      // for (let i = 0; i < values.length; i++){
      //   total = total + (values[i] as number)
      // }
      this.totalProducts = values.reduce((acc, value) => acc + value, 0 )      
    }

}
