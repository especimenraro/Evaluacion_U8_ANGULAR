import { Injectable } from '@angular/core';

@Injectable()
export class VariablesService {

  constructor() { }
private cantidad: number[]=[0]
private total: number = 0

leeCantidad() {
return this.cantidad[this.cantidad.length-1]
}

escribeCantidad(nuevaCantidad){
	this.cantidad.push(nuevaCantidad)
	console.log('la cantidad nueva es:', this.cantidad)
}

leeTotal() {
return this.total
}

escribeTotal(nuevoTotal){
	this.total = nuevoTotal
}


}














