import { Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TestDataComponent } from './components/test-data/test-data.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    path: 'testdata',
    component: TestDataComponent,
  },
  {
    path: 'formulario-producto',
    component: ProductFormComponent,
  },
];
