import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], arg?: string): Heroe[] {
    switch (arg) {
      case 'nombre':
        value = value.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1 )
      break;

      case 'vuela':
        value = value.sort( (a,b) => (a.vuela < b.vuela)? 1 : -1 )
      break;
      
      case 'color':
        value = value.sort( (a,b) => (a.color > b.color)? 1 : -1 )
      break;
    }
    return value;
  }

}
