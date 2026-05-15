import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public _service: InfoPagina){}

  ngOnInit(){

  }
}
