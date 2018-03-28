import { Component} from '@angular/core';
import {VariablesService} from '../variables.service'


@Component({
  selector: 'barra-sup',
  templateUrl: './barra-sup.component.html',
  styleUrls: ['./barra-sup.component.css'],
  
})
export class BarraSupComponent{
items: number

constructor(private variable: VariablesService) {

this.items = this.variable.leeCantidad();
  
 
}

  ngOnInit() {
  }

}
 