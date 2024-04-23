import { Caluladora } from './calculadora';
import { resta, suma } from './nuevaClase';

const result = suma(2, 2); // esto da 4

const result2 = resta(result, 1); // esto es 1

const calculator = new Caluladora();

calculator.suma(2, 2);
calculator.resta(2);

const resultado3 = calculator.calclar(); // 2
calculator.resta(1);

const resultado2 = calculator.calclar(); // 1

const calculadora2 = new Caluladora();
calculadora2.resta(2); // -2
calculadora2.suma(2, 2); // 0

const calculadora2resultado = calculator.calclar(); // 2
