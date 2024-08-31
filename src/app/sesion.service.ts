import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  private storageKey = 'ClaveSesion';
  private validkey = 'is valid'
  private Usuario = "Admin";
  private Password = "demo";

  setItem(): void {
    sessionStorage.setItem(this.storageKey, this.validkey);
  }
  //validacion
  valid (): boolean{
    const isauthoriced =sessionStorage.getItem(this.storageKey)
    const isvalid = isauthoriced == this.validkey;
    return isvalid 
  }
  
  login(Usuario: string|null|undefined, Password: string|null|undefined): boolean{
    if (this.Usuario != Usuario){
      return false;
    }
    if (this.Password != Password){
      return false;
    }
    this.setItem()
    return true;
  } 
  // elimina datos de sessionStorage
  logout(): void {
    sessionStorage.removeItem(this.storageKey);
  }
}
