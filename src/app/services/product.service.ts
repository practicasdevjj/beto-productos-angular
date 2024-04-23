import { Injectable } from '@angular/core';
import { Producto, ProductoCarrito } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private shoppingCartKey = 'shoppingCart';
  //TODO: poner como propiedad la clave con la que se guarda en local sotorage
  // por ejemplo shopingCartKey (tiene que ver con propiedades de la clase) (se puede buscar en google como asignar y usar propiedades a una clase javascript o typscript o como asignar y usar propiedades en un servicio angular )

  constructor() {}

  getproduct() {
    // const productList = Array(10).fill(1).map((item,index) => {
    //   return{
    //     title: 'Celular'+ index,
    //     marca: 'Iphone 15 pro',
  
  //     precio: 18000,
    //     imagen: 'assets/MPU63.jpeg',
    //     id: index + 1,
    //   };
    // })
    const productList: Producto[] = [
      {
        title: 'Celular',
        marca: 'Iphone 15 pro',
        precio: 18000,
        imagen: 'assets/MPU63.jpeg',
        id: 1,
      },
      {
        title: 'Pantalla',
        marca: 'Samsung',
        precio: 30000,
        imagen: 'assets/1010916.webp',
        id: 2,
      },
    ];
    return productList;
  }
}