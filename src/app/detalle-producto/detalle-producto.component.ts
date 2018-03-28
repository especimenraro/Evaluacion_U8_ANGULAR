import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Producto} from '../producto/producto';
import {PeticionService} from '../peticion.service'
import {Response} from '@angular/http'

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  providers: [Producto]
})
export class DetalleProductoComponent implements OnInit {
@Input() producto: Producto = {
													nombre: '...cargando...',
													precio: 0,
													disponible: 0,
													imagen: '',
													descripcion: '' 		
										  		};
  constructor(private ruta: ActivatedRoute, private peticion: PeticionService) { }
	public producto_nombre; 
	public stock;

	
  ngOnInit() {
     this.ruta.params
      .subscribe(params => {
        this.producto_nombre = params['producto'].toString();        
      });
     this.getDatos();
    
  } // FIN ON INIT
  
		getDatos(): any {
			this.peticion.getStock()
		  		.subscribe(
					(data: Response) => {
						this.stock = data;
					 	this.buscaProducto(this.stock)
					} // FIN FUNCION =>
		  		) // FIN SUBSCRIBE
}

	buscaProducto(data): any {
		for (let key in data) {
										if (data[key].nombre == this.producto_nombre){
										this.producto  = data[key];
											
										}//FIN IF
						} // FIN FOR	
	} // FIN BUSCA PRODUCTO
	
} // FIN CLASS
