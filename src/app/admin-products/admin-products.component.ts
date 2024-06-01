import { Component } from '@angular/core';
import { ProductoService } from '../services/product.service';
import { Producto } from '../Model/product';
import { Router, RouterModule } from '@angular/router';
import { SesionService } from '../sesion.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss'
})
export class AdminProductsComponent {

  listaproductos: Producto []

  constructor(private producto: ProductoService, private sesionservice: SesionService, private router: Router) {
    this.listaproductos = producto.getFromStorage()
  }
  remove (id: number) {
    this.producto.removeproduct(id)
    this.listaproductos = this.producto.getFromStorage()
  }
  logout () {
    this.sesionservice.logout()
    this.router.navigate(["/login"])
  }
  Actualizar(id: number){
    this.router.navigate(["/product-form" , id])
  }
  trackByFn(indice: number, product: Producto){
    return product.id
  }
}
