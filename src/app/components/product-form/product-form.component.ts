import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, of, switchMap, tap } from 'rxjs';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  user: any;
  constructor() {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    // RXjs

    of(1)
      .pipe(
        // hacer varias cosas
        tap((valor) => valor * 2),
        tap((valor) => console.log(valor)),
        map((original) => original + 2), // regresa 3
        map((original2) => original2 + 2), // regres 5
        tap((valor) => console.log(valor)),
        switchMap((original3) => of(original3 + 2)), // regrsa 7
        tap((usuario) => (this.user = usuario)) // this.usuario = 7
      )
      .subscribe();

    this.form.valueChanges
      .pipe(
        tap((valur) => console.log('cambios del formulario observable', valur))
      )
      .subscribe();
  }

  saving() {
    // Poner todo el codigo para guardar el producto

    const formValue = this.form.value;
    console.log('evento submit', formValue);
  }

  private createForm() {
    const form = new FormGroup({
      name: new FormControl(''),
      marca: new FormControl(''),
    });
    return form;
  }

  onChange() {
    console.log('Valor del formulario', this.form.value);
  }
}
