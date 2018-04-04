import { Injectable } from '@angular/core';

@Injectable()
export class VariablesService {

  constructor() { }
private cantidad: number[] = [0]
private total: number[] = [0]
private user

leeCantidad() {
return this.cantidad
}

escribeCantidad(nuevaCantidad){
	this.cantidad[0] += nuevaCantidad
	}
updateCantidad(nuevaCantidad ){
	this.cantidad[0] = nuevaCantidad
}
leeTotal() {
return this.total
}

escribeTotal(nuevoTotal){
	this.total[0] = nuevoTotal
}


}














