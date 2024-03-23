import { Injectable } from '@angular/core';
import { Producto } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcarService {
  //TODO: poner como propiedad la clave con la que se guarda en local sotorage
  // por ejemplo shopingCartKey (tiene que ver con propiedades de la clase) (se puede buscar en google como asignar y usar propiedades a una clase javascript o typscript o como asignar y usar propiedades en un servicio angular )

  constructor() {}

  getproduct() {
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

  //TODO: implementar método para guardar en localstorage del navegador

  saveStorage(mycar: Producto[]) {
    //TODO:
    // [  ]  pasar la lista de productos como argumento de este método.
    // [  ]  Convertir la lista de productos en texto
    // [  ]  Guardar en localStorate
    // [  ] Remplazar codigo con esta funcion
  }

  getFromStorage(): Producto[] {
    //TODO:
    // [  ]  recupearar el texto de localstorage
    // [  ]  Convertir el texto en objeto completo
    // [  ]  Remplazar donde corresponda
  }

  addproduct(myvar: Producto) {
    let mycar = localStorage.getItem('id');
    let car: Producto[];

    if (mycar) {
      car = JSON.parse(mycar);
    } else {
      car = [];
    }
    car.push(myvar);

    const mycartext = JSON.stringify(car);
    localStorage.setItem('id', mycartext);

    console.log(car);
    //       //guarda el producto
    // const mycartext = JSON.stringify(myvar);
    // localStorage.setItem('id',mycartext)
    // //recupera el producto
    // const mycar = localStorage.getItem('id')
    // const mycarobjet = JSON.parse(mycar!);

    // console.log("guardando",mycarobjet);
  }

  deletecart() {
    let mycartext = '[]';
    localStorage.setItem('id', mycartext);
  }

  delete(id: number) {
    let mycart = localStorage.getItem('id');
    let cart: Producto[];

    if (mycart) {
      cart = JSON.parse(mycart);
    }
    //---------------------------
    let lastIndex = -1;
    for (let i = cart!.length - 1; i >= 0; i--) {
      if (cart![i].id === id) {
        lastIndex = i;
        break;
      }
    }
    cart!.splice(lastIndex, 1);
    const mycartext = JSON.stringify(cart!);
    localStorage.setItem('id', mycartext);

    //   const updatedCart = cart!.filter(item => item.id !== id);

    //   localStorage.setItem('id', JSON.stringify(updatedCart));

    //   console.log(`El artículo con ID ${id} ha sido eliminado del carrito.`);
    // }
  }
}
