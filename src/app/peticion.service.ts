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
 }         // FIN NEWFLITER
 
  updateGaleria() { 
  		return this.listaProductos;
  } // FIN UPDATE GALERIA
  
  updateProducto(data: any[],key: any){
		  let disponible = data[0].disponible
		  let url = 'https://tienda-57b3d.firebaseio.com/bodega/' + key + '/disponible/.json';
		  let envio = this.http.put(url,JSON.stringify(disponible)).map((response: Response)=> response.json())
		    return envio
  } // FIN UPDATE PRODUCTO       
  
  getCarrito = () => {
 	let data = this.http.get('https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json').map((response: Response)=> response.json())
    return data
        } // FIN GET CARRITO
        
    updateCarrito(data: any[]) {
    	 let url = 'https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json';
 		 let envio = this.http.post(url,JSON.stringify(data[0])).map((response: Response)=> response.json())
   	 return envio
    
    } // FIN UPDATE CARRITO  
    
    borraCarrito() {
    		let url = 'https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json'
    		let data = 'null'
 			let envio = this.http.put(url,JSON.stringify(data)).map((response: Response)=> response.json())
   		return envio
    
    
    }  //FIN BORRA CARRITO
}















