import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/domain/carrera';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  carrera: Carrera = new Carrera();

  constructor(private carreraService: CarreraService,
    
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.carrera = new Carrera ()
        this.carrera = params['carrera']
      }
    }


}
