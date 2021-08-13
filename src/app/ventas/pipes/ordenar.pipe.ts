import { Heroe } from './../interfaces/ventas.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], orderPor: string = 'sin valor'): Heroe[] {


    switch (orderPor) {

      case 'nombre':
        return value = value.sort( (a,b) => ( a.nombre > b.nombre)? 1 : -1 )
      
      case 'vuela':
        return value = value.sort( (a,b) => ( a.vuela > b.vuela)? -1 : 1 )
    
      case 'color':
        return value = value.sort( (a,b) => ( a.color > b.color)? 1 : -1 )
      
      default:
        return value;
    }

    
  }

}
