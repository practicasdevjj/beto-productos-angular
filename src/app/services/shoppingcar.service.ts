import { Injectable } from '@angular/core';
import { Producto, ProductoCarrito } from '../Model/product';
import { ProductoService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcarService {
  private shoppingCartKey = 'shoppingCart';
  //TODO: poner como propiedad la clave con la que se guarda en local sotorage
  // por ejemplo shopingCartKey (tiene que ver con propiedades de la clase) (se puede buscar en google como asignar y usar propiedades a una clase javascript o typscript o como asignar y usar propiedades en un servicio angular )

  constructor(private producto: ProductoService) {}

  // getproduct() {
  //   // const productList = Array(10).fill(1).map((item,index) => {
  //   //   return{
  //   //     title: 'Celular'+ index,
  //   //     marca: 'Iphone 15 pro',
  
  // //     precio: 18000,
  //   //     imagen: 'assets/MPU63.jpeg',
  //   //     id: index + 1,
  //   //   };
  //   // })
  //   const productList: Producto[] = [
  //     {
  //       title: 'Celular',
  //       marca: 'Iphone 15 pro',
  //       precio: 18000,
  //       imagen: 'assets/MPU63.jpeg',
  //       id: 1,
  //     },
  //     {
  //       title: 'Pantalla',
  //       marca: 'Samsung',
  //       precio: 30000,
  //       imagen: 'assets/1010916.webp',
  //       id: 2,
  //     },
  //   ];
  //   return productList;
  // }
  //TODO: implementar método para guardar en localstorage del navegador

  saveStorage(mycar: any) {
    const mycarText = JSON.stringify(mycar);
    localStorage.setItem(this.shoppingCartKey, mycarText);
    //TODO:
    // [  ]  pasar la lista de productos como argumento de este método.
    // [  ]  Convertir la lista de productos en texto
    // [  ]  Guardar en localStorate
    // [  ] Remplazar codigo con esta funcion
  }

  getFromStorage(): any {
    const mycarText = localStorage.getItem(this.shoppingCartKey);
    return mycarText ? JSON.parse(mycarText) : {};
    //TODO:
    // [  ]  recupearar el texto de localstorage
    // [  ]  Convertir el texto en objeto completo
    // [  ]  Remplazar donde corresponda
  }

  getlist(): ProductoCarrito[] {
    const seleccion = this.getFromStorage();
    const productlist = this.producto.getproduct();
    const ids = Object.keys(seleccion).filter(id => seleccion[id] > 0 );
    const products = ids.map(
      (id) => {
        const Productonumero = productlist.find((producto) => `${producto.id}` == `${id}`)! as ProductoCarrito 
        Productonumero.total = seleccion[Productonumero.id]
        return Productonumero
      }
    );
    return products;
  }
//   const productsFilter = productsList.filter((product) =>
//     ids.includes(${product.id})
//     );
countproduct(): any  {
  const mycar = this.getFromStorage();
  const countById: { [id: number]: number } = {};

  for (const key in mycar) {
    if (Object.prototype.hasOwnProperty.call(mycar, key)) {
      const id = parseInt(key, 10);
      countById[id] = mycar[id] || 0;
    }
  }
  return countById;
}
//--------------------------------------------------------------------------------------
  addproduct(myvar: Producto) {
    const mycar = this.getFromStorage();
    const total = mycar[myvar.id] ?? 0 ;
    mycar[myvar.id] = total+1;
    this.saveStorage(mycar); 
    //guardar id
    // producto[id]
    // id [34]
  }

  deleteall() {
    this.saveStorage({});
    }

  delete(id: number) {
    const mycar = this.getFromStorage();
    if (mycar[id] && mycar[id] > 0) {
    mycar[id]--;
    this.saveStorage(mycar);
    }


    // const cart = this.getFromStorage();
    // //---------------------------
    // let lastIndex = cart.findIndex(product => product.id == id) 
    // cart!.splice(lastIndex, 1);
    // this.saveStorage(cart);

    //   const updatedCart = cart!.filter(item => item.id !== id);

    //   localStorage.setItem('id', JSON.stringify(updatedCart));

    //   console.log(`El artículo con ID ${id} ha sido eliminado del carrito.`);
    // }
  }

  extractid() {
  //   const ids = this.getFromStorage().map(product => product.id);
   }
}
