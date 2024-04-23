import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestservicesService {
  miNumero = 1;
  constructor() {}

  increment() {
    this.miNumero = this.miNumero * 2;
  }
}
