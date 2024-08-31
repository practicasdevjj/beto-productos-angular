import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputCustomizedComponent } from '../input-customized/input-customized.component';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    InputCustomizedComponent,
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
  mivalor = '';

  micontrolador = new FormControl();

  @ViewChild('miinput') miinputtag!: ElementRef;

  changing(value: any) {
    // proceso para sustiuir el valor anterio buscarlo en el array y quitarlo
    console.log('mi valor anterior', this.mivalor);

    console.log('mi valor actual', value.target.value);
    // agregar en el array el valor actual
    this.mivalor = value.target.value;
  }

  enviar() {
    console.log('enviar mi valor actual', this.mivalor);
  }
  enviarControlador() {
    console.log(
      'El valor del input con controlador es ',
      this.micontrolador.value
    );
  }
  enviarTag() {
    console.log('inputTag', this.miinputtag.nativeElement.value);
    const element: any = (document.querySelector('#miinputid') as any).value;
    console.log('nativehtml', element);
  }

  changingCustomizedValue(value: string) {
    console.log('evento personalizado', value);
  }
}
