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
      },
      {
        title: 'Pantalla',
        marca: 'Samsung',
        precio: 30000,
        imagen: 'assets/1010916.webp',
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
//opbetener el producto al que se le da clic



}
