import { Component, OnInit } from '@angular/core';
import {PeticionService} from '../peticion.service';
import {UsuariosService} from '../usuarios.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {VariablesService} from '../variables.service'


@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[PeticionService,Location] 
})
export class InicioComponent implements OnInit {

  constructor(private peticion: PeticionService, private usuario: UsuariosService, private ir: Router, private cuentas: VariablesService) { }
  
  ngOnInit() {
  }
verificaUsers(user: any,pass: any){
	let listaUsers = this.peticion.getUsers()
		.subscribe((data: Response)=>{
			for (let key in data) {
				if (data[key].nombre == user) {
					if (data[key].pass == pass) {
						this.usuario.escribeUser(key)
							this.peticion.getCarrito()
							 		.subscribe(
										(data: Response) => {
														if (data.valueOf() !='null') {
															let cantidad = 0
															 for (let key in data) {
													      		cantidad += 1*data[key].unidades;
														      	
												      		} // FIN FOR		
													this.cuentas.updateCantidad(1*cantidad);
													
														} // FIN IF
														else {
																this.cuentas.updateCantidad(0);
														} // FIN ELSE
											} // FIN DATA RESPONSE
							  		)  // FIN SUBSCRIBE GET CARRITO
						this.ir.navigateByUrl('catalogo/galeria')
						console.log('login ok')
						return
					}	 //	FIN IF PASS			
				} // FIN IF USER
			} // FIN FOR
			alert('Usuario o Contraseña incorrectos')
		}) // FIN SUBSCRIBE

} // FIN VERIFICA USERS
}
