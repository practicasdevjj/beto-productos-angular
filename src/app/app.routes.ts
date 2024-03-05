import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComponent } from './carrito/carrito.component';


export const routes: Routes = [
    {
        path: "productos",
        component: ProductListComponent
    }, {
        path: "carrito",
        component: CarritoComponent
    }
];
