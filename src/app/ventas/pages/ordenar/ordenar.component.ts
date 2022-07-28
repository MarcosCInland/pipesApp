import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  arg: boolean = false;
  sort: string = '';
  
  heroes: Heroe[] = [
    {
    nombre: 'Superman',
    vuela: true,
    color: 2
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: 1
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: 3
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: 0
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: 3
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiarArg(): void {
    !this.arg ? this.arg = true : this.arg = false;
  }

  definirSort(newValue: string): void {
    this.sort = newValue;
    console.log(this.sort);
  }

}
