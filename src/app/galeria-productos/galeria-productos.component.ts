import { Component } from '@angular/core';
import {ProductoComponent} from '../producto/producto.component';
import {Producto} from '../producto/producto';
import {PeticionService} from '../peticion.service';
import {Response} from '@angular/http';


@Component({
  selector: 'galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.css']
})

export class GaleriaProductosComponent {
listaProductos: string[] = []

  constructor(private peticion: PeticionService) {
  	this.listaProductos = this.peticion.updateGaleria();
   }

  ngOnInit() {
  

  	
  } // FIN ON INIT


	
  
} // FIN CLASS
