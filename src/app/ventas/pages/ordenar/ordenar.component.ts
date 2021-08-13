import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula!: boolean;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevill',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  cambiarMayuscula() : void{
      // if (this.enMayuscula) {
      //   this.enMayuscula = false
      //   return;
      // }
      // this.enMayuscula = true;

      this.enMayuscula = !this.enMayuscula

  }


  changeOrder(value: string){
    this.ordenarPor = value;
  }

}
