import { Component, OnInit } from '@angular/core';
import {PedidosComponent} from '../pedidos/pedidos.component'
import {Pedido} from '../pedidos/pedidos'

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
total= 200;
listaPedido: Pedido[] = [
{nombre: 'Ajo', unidades: 7,subtotal: 18,imagen: '../imagenesBase/ajo.jpg'},
{nombre: 'Calabaza', unidades: 6,subtotal: 21,imagen: '../imagenesBase/calabaza.jpg'},
{nombre: 'Almendras', unidades: 5,subtotal: 24,imagen: '../imagenesBase/almendras.jpg'},
{nombre: 'Arandanos', unidades: 4,subtotal: 54,imagen: '../imagenesBase/arandanos.jpg'},
{nombre: 'Canela', unidades: 3,subtotal: 65,imagen: '../imagenesBase/canela.jpg'},
]
  constructor() { }

  ngOnInit() {
  }

}