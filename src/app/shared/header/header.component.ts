import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
                public router: Router ) { }

  ngOnInit(): void {
  }

  buscarProducto( termino: string){
    if( termino.length <1){
      return;
    }

    this.router.navigate(['/search', termino]);
  }
}
