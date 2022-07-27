import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  arg: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  cambiarArg(): void {
    !this.arg ? this.arg = true : this.arg = false;
  }

}
