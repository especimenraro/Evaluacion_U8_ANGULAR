import { Component } from '@angular/core';
import {PeticionService} from '../peticion.service'
import {Response} from '@angular/http'

@Component({
  selector: 'barra-buscador',
  templateUrl: './barra-buscador.component.html',
  styleUrls: ['./barra-buscador.component.css']
 
})
export class BarraBuscadorComponent {

  constructor(private peticion: PeticionService ) { }
	
  ngOnInit() {
  
  this.peticion.getStock()
					 		.subscribe(
								(data: Response) => {
								
												let aux: string[] = [] 
					        
												 for (let key in data) {
										      		aux.push(data[key])
											      	
									      		} // FIN FOR		
											this.peticion.newFilter(aux)	
									}
					  		)
					
  } // FIN INIT
  
	onChange = (valor) => {
	
			this.peticion.getStock()
				.subscribe(
						(data: Response) => {
										let aux: string[] = [];
							        let longitud = valor.length;
								 for (let key in data) {
								 	 
						      	if (data[key].nombre.substr(0,longitud) == valor) {
						      		aux.push(data[key])
							      	} // FIN IF
					      		} // FIN FOR				
					      		this.peticion.newFilter(aux)	
									
								} // FIN DATA RESPONSE
			  		) // FIN SUBSCRIBE
			  		
			  		
			  		
	}
	
}
