import { Component, OnInit } from '@angular/core';
import {ProductoComponent} from '../producto/producto.component';
import {Producto} from '../producto/producto';

@Component({
  selector: 'galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.css']
})
export class GaleriaProductosComponent implements OnInit {
listaProductos: Producto[] =[
{precio: 5,
disponible: 10,
nombre:'ajo',
imagen: '../imagenesBase/ajo.jpg'
},
{precio: 15,
disponible: 120,
nombre: 'calabaza',
imagen: '../imagenesBase/calabaza.jpg'
},
{precio: 2,
disponible: 2,
nombre: 'almendras',
imagen: '../imagenesBase/almendras.jpg'
},
{precio: 3,
disponible: 7,
nombre:'arandanos',
imagen: '../imagenesBase/arandanos.jpg'
},
{precio: 4,
disponible: 1,
nombre:'brocoli',
imagen: '../imagenesBase/brocoli.png'
},
{precio: 22,
disponible: 18,
nombre:'canela',
imagen: '../imagenesBase/canela.jpg'
},
{precio: 4,
disponible: 1,
nombre:'cebolla',
imagen: '../imagenesBase/cebolla.jpg'
},
{precio: 24,
disponible: 12,
nombre:'Palta',
imagen: '../imagenesBase/aguacate.jpg'
}
];
  constructor() { }

  ngOnInit() {
  }

}
