import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { InfoPagina } from '../../services/info-pagina';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  anio: number = new Date().getFullYear();

  constructor(public _service: InfoPagina){

  }
}
