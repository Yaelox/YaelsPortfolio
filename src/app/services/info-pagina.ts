import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infopagina } from '../interface/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPagina {

  info!: infopagina;
  cargada = false;

  constructor(private http: HttpClient) {

    console.log('Servicio de Info Pagina');

    this.http.get<infopagina>('/assets/data/data-pagina.json')
      .subscribe((resp) => {

        this.cargada = true;
        this.info = resp;

        console.log(resp);

      });
  }
}