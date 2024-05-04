import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProductoService } from '../../services/product.service';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule,],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.scss'
})
export class ProductformComponent {

  constructor(private producto: ProductoService  ) {}
  
  form = new FormGroup({
    title: new FormControl("",[Validators.required]),
    marca: new FormControl("",[Validators.required]),
    precio: new FormControl(undefined, [Validators.required]),
    descripcion: new FormControl(),
    imagen: new FormControl("",[Validators.required])
  })
  submit() {
    if(this.form.invalid){
      console.log("Datos invalidos")
      return;
    }
    console.log(this.form.value)

    const product: any = this.form.value;
    product.id = new Date().getTime()
    this.producto.addproducto(product)
  }
  

}
