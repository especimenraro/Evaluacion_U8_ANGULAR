import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  constructor() { }
private user: string[]=[]

escribeUser(user: any){
	this.user[0] = user;
	console.log(this.user)
}

getUser(){
	return this.user[0];
}
}
