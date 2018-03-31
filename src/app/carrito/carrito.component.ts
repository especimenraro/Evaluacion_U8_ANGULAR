import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http'
import {PedidosComponent} from '../pedidos/pedidos.component'
import {Pedido} from '../pedidos/pedidos'
import {PeticionService} from '../peticion.service';
import {VariablesService} from '../variables.service'

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
total= 0;

listaPedido: string[] = []
  constructor(private peticion:PeticionService, private cuentas: VariablesService) { }

  ngOnInit() {
 this.peticion.getCarrito()
					 		.subscribe(
								(data: Response) => {
												if (data.valueOf() !='null') {
												console.log(data.valueOf())
													let aux: string[] = [] 
													let cantidad = 0
													 for (let key in data) {
											      		aux.push(data[key])
												      	this.total += data[key].subtotal
												      	cantidad += 1*data[key].unidades;
												      	
										      		} // FIN FOR		
									      		
											this.listaPedido = aux
											this.cuentas.updateCantidad(1*cantidad);
											
												} // FIN IF
												else {
														this.listaPedido = ['nombre': 'Carrito Vacio',
																									unidades: '',
																									subtotal: '',
																									imagen: '']
												} // FIN ELSE
									} // FIN DATA RESPONSE
					  		)  // FIN SUBSCRIBE
  } // FIN ON INIT

pagarCarrito() {

	this.peticion.borraCarrito().subscribe()
	this.cuentas.updateCantidad(0);
	
} // FIN PAGAR CARRITO
}
















