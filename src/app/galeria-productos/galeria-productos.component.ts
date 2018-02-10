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
imagen: '../imagenesBase/ajo.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 15,
disponible: 120,
nombre: 'calabaza',
imagen: '../imagenesBase/calabaza.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 2,
disponible: 2,
nombre: 'almendras',
imagen: '../imagenesBase/almendras.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 3,
disponible: 7,
nombre:'arandanos',
imagen: '../imagenesBase/arandanos.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 4,
disponible: 1,
nombre:'brocoli',
imagen: '../imagenesBase/brocoli.png',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 22,
disponible: 18,
nombre:'canela',
imagen: '../imagenesBase/canela.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 4,
disponible: 1,
nombre:'cebolla',
imagen: '../imagenesBase/cebolla.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
},
{precio: 24,
disponible: 12,
nombre:'Palta',
imagen: '../imagenesBase/aguacate.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
}
];
  constructor() { }

  ngOnInit() {
  }

}
