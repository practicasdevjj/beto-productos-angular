import { Injectable } from '@angular/core';
import { Producto, ProductoCarrito } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productoskey = 'productos';
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
    const productList: Producto[] = this.getFromStorage();
    return productList;
  }
  saveStorage(productos: any) {
    const productosText = JSON.stringify(productos);
    localStorage.setItem(this.productoskey, productosText);
  }
  getFromStorage(): Producto[] {
    const productosText = localStorage.getItem(this.productoskey);
    return productosText ? JSON.parse(productosText) : [];
  }
  addproducto(producto: Producto){
    //recuperar la lista de productos 
    const productoslist = this.getFromStorage();
    //se agrega el producto a la lista existente
    productoslist.push(producto);
    //guarda la lista actualizada
    this.saveStorage(productoslist); 
  }
  removeproduct(id: number){
    //recuperar la lista de productos
    const listproduct = this.getFromStorage();
    //eliminar el producto que tenga el id seleccionado
    let listanueva = listproduct.filter(product => product.id !== id);
    //guardar la lista actualizada 
    this.saveStorage(listanueva);
  }
}
