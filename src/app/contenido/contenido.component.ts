import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  book = {
    unitValue:'$ 50.000,00',
    total:'$ 50.000,00',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
