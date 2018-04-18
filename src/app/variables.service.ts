import { Injectable } from '@angular/core';

@Injectable()
export class VariablesService {

  constructor() { }
private cantidad: number[] = [0]
private total: number[] = [0]
private user
private productoDisponible: number[] = []
private cantidadDisponible: number[] = []

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

updateBodega(data,key){
	this.productoDisponible.push(key);
	this.cantidadDisponible.push(data);
	console.log(this.productoDisponible );
	console.log(this.cantidadDisponible );

} // FIN UPDATE BODEGA

getBodegaProducto(){
	return this.productoDisponible;
}// FIN GET BODEGA

getBodegaCantidad(){
	return this.cantidadDisponible;
}// FIN GET BODEGA

borraDatosBodega(){
this.cantidadDisponible = []
this.productoDisponible = []
} // FIN BORRA BODEGA
}














