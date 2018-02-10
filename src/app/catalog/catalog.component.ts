import { Component, OnInit } from '@angular/core';
import {BarraSupComponent} from '../barra-sup/barra-sup.component';
import {BarraBuscadorComponent} from '../barra-buscador/barra-buscador.component';
import {GaleriaProductosComponent} from '../galeria-productos/galeria-productos.component';
import {CarritoComponent} from '../carrito/carrito.component'

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
