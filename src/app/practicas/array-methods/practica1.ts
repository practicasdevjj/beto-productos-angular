const myList = [1, 2, 3, 4, 5];

const myListObject = [
  { id: 1, name: 'hola' }, // indice 0
  { id: 2, name: 'saludos' }, // indice 1
  { id: 1, name: 'saludos' }, // indice 1
];

// funcion map te convierte un array en otro array diferente.

const numbersBy2 = myList.map((num) => num * 2); // [2,4,6, 7, 10]
const numbers1 = myList.map((num) => 1); // [1,1,1, 1, 1]

const ids = myListObject.map((empleado) => empleado.id); // [1,2]

const ids3 = myListObject.map((item) => {
  const name = item.name;
  const id = item.id;
  const uniqueid = name + '_' + id;
  return uniqueid;
}); // ["hola_1", "saludos_2"]

const ids4 = myListObject.map((item, index, list) => index);
[0, 1];

const id = 1;
const index = myListObject.findIndex((item, index, list) => item.id == id); // regresa 0
let lastIndex = myList.findIndex((item, index, list) => item == 5); // regresa 4 // si no encuentra nininguna coincidencia retorna -1
