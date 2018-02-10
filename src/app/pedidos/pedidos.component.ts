import { Component, OnInit, Input } from '@angular/core';
import {Pedido} from './pedidos'

@Component({
  selector: 'pedido',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
@Input() pedido: Pedido;
  constructor() { }

  ngOnInit() {
  }

}
