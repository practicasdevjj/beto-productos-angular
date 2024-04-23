interface Producto {
  title: string;
  id: string;
  precio: number;
}

interface ProductoCarrito {
  title: string;
  id: string;
  precio: number;
  total: number;
}

const product: Producto = {
  title: 'Celular',
  id: '1',
  precio: 18000,
};

const productCarrito: ProductoCarrito = product as ProductoCarrito;
