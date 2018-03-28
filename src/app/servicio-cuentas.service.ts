import { Injectable } from '@angular/core';
import {VariablesService} from './variables.service'

@Injectable()
export class ServicioCuentasService {

  constructor(private variable:VariablesService) {}

private cantidad
private	total
					
updateCantidad( cantidad: number) {
	let aux = 1* cantidad
	this.cantidad = this.variable.leeCantidad()
	this.cantidad += aux;
	this.variable.escribeCantidad(this.cantidad)
	
	
}

updateCuenta( subtotal) {
	let aux = 1*subtotal
	this.total = this.variable.leeTotal()
	this.total += aux
	this.variable.escribeTotal(this.total)
	console.log('Total:', this.total)
}

// AQUI DEBE IR EL OBSERVABLE DE LA MODIFICACION DE CANTIDAD

}
