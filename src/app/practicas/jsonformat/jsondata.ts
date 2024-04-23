interface EmployeeBirthday {
  day: number;
  month: number;
  year: number;
}
interface Employee {
  nombre: string;
  apellidos: string;
  edad: number;
  fechadenacimiento: EmployeeBirthday;
}

const employee = {
  nombre: 'pancho',
  apellidos: 'lopez',
  edad: 23,
  fechadenacimiento: {
    day: 12,
    month: 12,
    year: 2000,
  },
  'esto tambien es un indice': 'valor desconocido',
};

employee.nombre = 'nose';
employee.nombre; // esto es igual a pancho
employee.fechadenacimiento.day; // est es igual a 12

const jsonstr =
  '{"nombre":"pancho","apellidos":"lopez","edad": 23,"fechadenacimient": {"day": 12,"month": 12,"year": 2000}}';

const employee2 = JSON.parse(jsonstr);

employee2.apellidos; // esto es igul a lopez
employee2['esto tambien es un indice']; // esto es igual a valor desconocido

const listaObj = [
  {
    nombre: 'pancho',
    apellidos: 'lopez',
    edad: 23,
    fechadenacimient: {
      day: 12,
      month: 12,
      year: 2000,
    },
  },
  {
    nombre: 'Juan ',
    apellidos: 'Dominguez',
    edad: 34,
    fechadenacimient: {
      day: 23,
      month: 1,
      year: 2023,
    },
  },
];

listaObj[0].apellidos; // esto es igula a lopez
listaObj[1].apellidos; // esto es igula a Dominguez

const listDeUsuarios = [
  {
    id: 1,
    nombre: 'Juan',
    apellidos: 'Dominguez',
    edad: 34,
  },
  {
    id: 2,
    nombre: 'Pedro',
    apellidos: 'Gonzalez',
    edad: 23,
  },
];
