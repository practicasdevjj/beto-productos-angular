import { Component } from '@angular/core';
import { ProductoService } from '../services/product.service';
import { Producto } from '../Model/product';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {

  listaproductos: Producto []

  constructor(private producto: ProductoService  ) {
    this.listaproductos = producto.getFromStorage()
  }
  remove (id: number) {
    this.producto.removeproduct(id)
    this.listaproductos = this.producto.getFromStorage()
  }
}
