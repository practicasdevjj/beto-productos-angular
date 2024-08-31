import { Routes } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { chekGuard } from './chek.guard';
import { ProductformComponent } from './components/productform/productform.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InputsComponent } from './testcomponents/inputs/inputs.component';


export const routes: Routes = [
    {
        path: "productos",
        component: ProductListComponent
    }, {
        path: "carrito",
        component: CarritoComponent
    },
    {
        path: "product-form",
        component: ProductformComponent
    },
    {
        path: "adminproduct",
        component: AdminProductsComponent,
        canActivate:[chekGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "product-form/:id",
        component: ProductformComponent
    },
    {
        path: 'testinputs',
        component: InputsComponent,
      },

];
