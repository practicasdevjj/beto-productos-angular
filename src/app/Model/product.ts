export interface Producto {
    title: string;
    marca: string;
    precio: number;
    descripcion?: string;
    imagen: string;
    id: number;
  }

  export interface ProductoCarrito {
    title: string;
    marca: string;
    precio: number;
    imagen: string;
    id: number;
    total: number;
  }

  // export interface ProductoCarrito2 extends Producto{
  //   total: number;
  // }
  