import { Component } from '@angular/core';
import {InicioComponent} from './inicio/inicio.component';
import {CatalogComponent} from './catalog/catalog.component';
import {VariablesService} from './variables.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VariablesService]
})
export class AppComponent {
  
}
