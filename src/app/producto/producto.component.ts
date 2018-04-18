import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Producto} from './producto';
import {VariablesService} from '../variables.service'
import {PeticionService} from '../peticion.service';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: []
})



export class ProductoComponent implements OnInit {
@Input() producto: Producto;
  constructor(private http: Http, private cuentas: VariablesService, private peticion: PeticionService) { }

  ngOnInit() {
  }

agregaProducto(cantidad){
	let disponible = this.producto.disponible;
	let descripcion = this.producto.descripcion;
	let imagen = this.producto.imagen;
	let nombre =  this.producto.nombre;
	let precio = this.producto.precio;
	let subtotal = cantidad * this.producto.precio;
	
	if (cantidad <= disponible) {
	
		this.cuentas.escribeCantidad(1*cantidad);
		disponible -= cantidad
		let data = [{'nombre': nombre, 'disponible': this.producto.disponible, 'descripcion':descripcion,'imagen':imagen,'precio':precio}]
		let carrito = [{'nombre': nombre,'unidades': cantidad, 'imagen': imagen, 'subtotal':subtotal }]
		 this.peticion.getStock()
					 		.subscribe(
								(stock: Response) => {
								
												 for (let key in stock) {
										      		if (stock[key].nombre == nombre) {
										      			this.cuentas.updateBodega(disponible,key)								      		
										      		} // FIN IF
											      	
									      		} // FIN FOR		
											
									}
					  		) // FIN SUBSCRIBE
			this.peticion.updateCarrito(carrito).subscribe()
		
	} else {
		alert('Cantidad excede Disponibilidad')	
	}
	
} // FIN AGREGA PRODUCTO
}
