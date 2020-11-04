import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    equipo: any[] = [];

  constructor( private http: HttpClient ) {

      this.cargarInfo();
      this.cargarEquipo();


  }

  // tslint:disable-next-line: typedef
  private cargarInfo() {

    // leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {


        this.cargada = true;
        this.info = resp;
      });

  }


  // tslint:disable-next-line: typedef
  private cargarEquipo() {

    this.http.get('https://angular-html-eed9b.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {


      this.equipo = resp;
    });


  }

}
