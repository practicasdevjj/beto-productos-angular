import { Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InputsComponent } from './testcomponents/inputs/inputs.component';

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductListComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: 'testinputs',
    component: InputsComponent,
  },
];
