import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeticionService {

  constructor(private http: Http) { }
  
  private listaProductos: string[] = [];
  
  	getStock = () => {
 	let data = this.http.get('https://tienda-57b3d.firebaseio.com/bodega/.json').map((response: Response)=> response.json())
    return data
        } // FIN GET STOCK
        
 newFilter(lista: string[]){
 	let aux: string[] = []
 	 this.listaProductos.splice(0, this.listaProductos.length)
 	for (let key in lista) {
								 	 	
						      		 this.listaProductos.push(lista[key])
							      	
					      		} // FIN FOR	
 	 
	
 }         
 
  updateGaleria() { 
  		return this.listaProductos;
  }
         
}
