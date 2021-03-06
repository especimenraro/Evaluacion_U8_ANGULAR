import { Component } from '@angular/core';
import {ProductoComponent} from '../producto/producto.component';
import {Producto} from '../producto/producto';
import {PeticionService} from '../peticion.service';
import {Response} from '@angular/http';
import {VariablesService} from '../variables.service';

@Component({
  selector: 'galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.css']
})

export class GaleriaProductosComponent {
listaProductos: string[] = []

  constructor(private peticion: PeticionService, private cuentas: VariablesService) {
  	this.listaProductos = this.peticion.updateGaleria();
   }

  ngOnInit() {
  

  	
  } // FIN ON INIT

agregaProducto(cantidad){
	
	
		this.cuentas.escribeCantidad(1*cantidad);
	
	
} // FIN AGREGA PRODUCTO
	
  
} // FIN CLASS
