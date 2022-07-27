import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre: string = 'Marcos';
  genero: string = 'masculino';
  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Marcos', 'Andres'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  //keyValue Pipe
  persona = {
    nombre: 'Marcos',
    edad: 22,
    direccion: '10 Av 16-05'
  }

  //json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async pipe
  myObservable = interval(1000); //Emite valores numericos
  valorPromesa = new Promise( (resolve, reject)=>{
    setTimeout(() =>{ resolve('Fin de la promesa') }, 3500);
  })

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(): void {
    if (this.nombre === 'Marcos') {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Marcos';
      this.genero = 'masculino';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }


}
