import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/domain/carrera';

@Component({
  selector: 'app-listacarreras',
  templateUrl: './listacarreras.component.html',
  styleUrls: ['./listacarreras.component.scss']
})
export class ListacarrerasComponent {

  listadoCarreras: Carrera[] = [] 
  contactoSeleccionado: Carrera| null = null;
  
  constructor(carreraService: CarreraService,private router: Router ) {
    this.listadoCarreras = carreraService.getlist()
    console.log('listadoCarrera', this.listadoCarreras)
  }

}
