import { Component, OnInit, Input } from '@angular/core';
import {Producto} from '../producto/producto';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
@Input() producto: Producto = {precio: 5,
disponible: 10,
nombre:'ajo',
imagen: '../imagenesBase/ajo.jpg',
descripcion: 'Lorem ipsum dolor sit amet, consecteteur adipiscing elit eget vulputate. Arcu lorem turpis fusce, feugiat, amet. Felis nulla elit. Blandit nisi, pede, in felis ve netus. Scelerisque hac, sapien. Libero at, maecenas ligula. Platea natoque ac cubilia cras, consectetuer. Ante nulla dolor placerat ve, odio odio porta. Semper leo ut taciti facilisi in aptent fermentum cubilia.'
};
  constructor() { }

  ngOnInit() {
  }

}
