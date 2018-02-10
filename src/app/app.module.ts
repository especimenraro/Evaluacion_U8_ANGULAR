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
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
