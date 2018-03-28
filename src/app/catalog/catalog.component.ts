import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {BarraSupComponent} from '../barra-sup/barra-sup.component';
import {BarraBuscadorComponent} from '../barra-buscador/barra-buscador.component';
import {GaleriaProductosComponent} from '../galeria-productos/galeria-productos.component';
import {CarritoComponent} from '../carrito/carrito.component';
import {DetalleProductoComponent} from '../detalle-producto/detalle-producto.component';
import {PeticionService} from '../peticion.service';


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [Location, PeticionService]
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }

}
