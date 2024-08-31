import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SesionService } from '../sesion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    Usuario: new FormControl("",[Validators.required]),
    Password: new FormControl("",[Validators.required])
  })
  constructor(private _snackBar: MatSnackBar, private router: Router, private sesionservice: SesionService){

  }
  submit(){
    if(this.form.invalid){
      this._snackBar.open("Datos invalidos")
      return;
    }
    console.log(this.form.value)

    const Usuario = "Admin";
    const Password = "demo";

    // if (this.form.value.Usuario == Usuario){
    //   if (this.form.value.Password == Password){
    //     console.log("acceso concedido")
    //   }
    //   else {
    //     console.log("acceso denegado")
    //   }
    // }
    // else {
    //   console.log("acceso denegado")
    // }

    // if (this.form.value.Usuario == Usuario && this.form.value.Password == Password){
    //   console.log("acceso consedido")
    // }
    // else{
    //   console.log("acceso denegado")
    // }

    // if (this.form.value.Usuario != Usuario){
    //   this._snackBar.open("usuario incorrecto",undefined,{duration:3000})
    //   return
    // }
    // if (this.form.value.Password != Password){
    //   this._snackBar.open("Password incorrecto")
    //   return
    // }

    if (this.sesionservice.login(this.form.value.Usuario, this.form.value.Password)){
      this._snackBar.open("acceso consedido")
      this.router.navigate(["/adminproduct"])        
    }
    else 
    this._snackBar.open("usuario o password incorrecto",undefined,{duration:3000})
    


    

  }
}
