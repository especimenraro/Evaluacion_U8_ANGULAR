import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from '../inicio/inicio.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {GaleriaProductosComponent} from '../galeria-productos/galeria-productos.component';
import {CarritoComponent} from '../carrito/carrito.component';
import {DetalleProductoComponent} from '../detalle-producto/detalle-producto.component';
 
const rutas: Routes = [
	{path: '', component: InicioComponent},
	{path: 'catalogo', component: CatalogComponent, children: [{path: 'galeria', component: GaleriaProductosComponent }]},
	{path: 'catalogo', component:CatalogComponent, children: [{path: 'galeria/detalle/:producto', component: DetalleProductoComponent}]},
	{path: 'catalogo', component: CatalogComponent, children: [{path: 'carrito', component: CarritoComponent }] }
]
@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
