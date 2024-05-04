import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductformComponent } from './components/productform/productform.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';


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
        component: AdminProductsComponent
    }

];
