export class Caluladora {
  resultado: number = 0;
  suma(n1: number, n2: number) {
    this.resultado = n1 + n2;
  }
  resta(n2: number) {
    this.resultado = this.resultado - n2;
  }
  calclar() {
    return this.resultado;
  }
}
