import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Producto} from './producto';
import {VariablesService} from '../variables.service'

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: []
})



export class ProductoComponent implements OnInit {
@Input() producto: Producto;
  constructor(private http: Http, private cuentas: VariablesService) { }

  ngOnInit() {
  }

agregaProducto(cantidad){
	let disponible = this.producto.disponible;
	let nombre =  this.producto.nombre;
	let subtotal = cantidad * this.producto.precio;
	let data = [{'nombre': nombre, 'cantidad': cantidad, 'subtotal': subtotal}]
	if (cantidad <= disponible) {
	
		this.cuentas.escribeCantidad(1*cantidad);
		//this.cuentas.updateCuenta(subtotal);
		this.producto.disponible -= cantidad
	} else {
		alert('Cantidad excede Disponibilidad')	
	}
	
} // FIN AGREGA PRODUCTO
}
