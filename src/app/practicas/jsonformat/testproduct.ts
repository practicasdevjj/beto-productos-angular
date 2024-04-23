// Celular tiene id 2 pantalla id 1 y mochila id 4

// [1,2,3,2,2,2] // 4 celulares  y pantalla y una mochila

// ver el numero de veces que se repite el id

// 1 = 1, 2 = 4, 3 = 1

// pantalla = 1, celular = 4 y mochila = 1

// [
//     1,2,3,
// ]
// [
//     {id: 1,name:"celluar"},
//     {id: 2,name:"pantalla"},

// ]
// {
//     totalProductos: 1,
//     "1": 10,
//     "Productos guardados": [1,1]
// }

const productosIds = [1, 2, 3, 2, 2, 2];
// proceso para recuperarlo es contar el numero de veces que aparece un id

const productosSeleccionados = {
  '2': 4,
  '1': 1,
  '3': 1,
};

productosSeleccionados['2'] = 5;

// { "2": 4, "1": 1, "3": 1 }

//
const productosSeleccionadosList = [
  {
    id: 2,
    cantidad: 4,
  },
  {
    id: 1,
    cantidad: 1,
  },
  {
    id: 3,
    cantidad: 1,
  },
];

const productoAActualizar; // buscar el registro con el id correspdiente

const productoSeleccionado = {
  id: 2,
  cantidad: 4,
};

productoSeleccionado.cantidad = 5;

const agregarProducto = (producto: any) => {
  const listaDeproductos: any = {};

  listaDeproductos[producto.id] = 2;
};
