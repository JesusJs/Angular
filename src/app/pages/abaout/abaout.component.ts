import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-abaout',
  templateUrl: './abaout.component.html',
  styleUrls: ['./abaout.component.css']
})
export class AbaoutComponent implements OnInit {

  constructor( public infoService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
