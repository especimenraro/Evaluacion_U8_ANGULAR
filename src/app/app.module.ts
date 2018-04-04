import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BarraSupComponent } from './barra-sup/barra-sup.component';
import { BarraBuscadorComponent } from './barra-buscador/barra-buscador.component';
import { GaleriaProductosComponent } from './galeria-productos/galeria-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {PeticionService} from './peticion.service';
import {UsuariosService} from './usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogComponent,
    BarraSupComponent,
    BarraBuscadorComponent,
    GaleriaProductosComponent,
    DetalleProductoComponent,
    PedidosComponent,
    ProductoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
