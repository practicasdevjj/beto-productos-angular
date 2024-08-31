import {Component, OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProductoService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ProductoInput } from '../../Model/product';

@Component({
  selector: 'app-productform',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule,],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.scss'
})
export class ProductformComponent implements OnInit{

  constructor(private producto: ProductoService, private route: ActivatedRoute  ) {}
  ngOnInit(): void {
    this.route.paramMap.pipe(
      tap(params=>console.log(params.get("id"))), tap(params=>this.fillform(parseInt(params.get("id")!))),
      tap(params=>this.id = params.get("id") ? parseInt(params.get("id")!): null )
    ).subscribe()
  }
    id: number | null = null
    form = new FormGroup({
    title: new FormControl("",[Validators.required]),
    marca: new FormControl("",[Validators.required]),
    precio: new FormControl(0, [Validators.required]),
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
    if (!this.id) {
      product.id = new Date().getTime()
      this.producto.addproducto(product) 
    }
    else {
      this.producto.actualizar(this.id, product)
    }    

  }
  fillform(id: number | null){
    if (id == null){ return }
    const miproducto = this.producto.findproduct(id) 
      if (miproducto){
        this.form.patchValue({title:miproducto.title, precio:miproducto.precio, marca:miproducto.marca, descripcion:miproducto.descripcion, imagen:miproducto.imagen})
    }
  }
  // getform(id: number){ 
  // const miproducto = this.producto.findproduct(id) 
  // }
}
