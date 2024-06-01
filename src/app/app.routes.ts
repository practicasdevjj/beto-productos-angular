import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductformComponent } from './components/productform/productform.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { chekGuard } from './chek.guard';


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
    }

];
