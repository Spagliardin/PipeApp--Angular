import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //id18nselect
  nombre: string = 'Nicolas';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Martin', 'Nicolas']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un clientes esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente(){
    this.nombre = 'Sofia'
  }

  borrarCliente(){
    this.clientes = this.clientes.splice(1)
  }


  // keyValuePipe

  persona = {
    nombre: 'Nicolas',
    edad: '28',
    direccion: 'Buenos Aires, Argentina'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'spiderman',
      vuela: false
    },
    {
      nombre: 'robin',
      vuela: false
    },
  ]

  // Async Pipe

  miObservable = interval(1000) // emite 0,1,2,3,4,5
 
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Se llego al minuto')
    }, 60000 );
  } )

}
