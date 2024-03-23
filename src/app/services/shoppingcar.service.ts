import { Injectable } from '@angular/core';
import { Producto } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcarService {

  constructor() {  }

  getproduct (){
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
  return productList
  }

  addproduct(myvar: Producto){

      let mycar = localStorage.getItem('id');
      let car: Producto[];
      
      if (mycar) {
          car = JSON.parse(mycar);
      } else {
          car = [];
      }
      car.push(myvar)
      const mycartext = JSON.stringify(car);
      localStorage.setItem('id', mycartext);
      
      console.log (car);
    //       //guarda el producto
    // const mycartext = JSON.stringify(myvar);
    // localStorage.setItem('id',mycartext)
    // //recupera el producto 
    // const mycar = localStorage.getItem('id')
    // const mycarobjet = JSON.parse(mycar!);

    // console.log("guardando",mycarobjet);
  }

  deletecart(){
    let mycartext = "[]";
    localStorage.setItem('id', mycartext);
  }

  delete (id: number){
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
