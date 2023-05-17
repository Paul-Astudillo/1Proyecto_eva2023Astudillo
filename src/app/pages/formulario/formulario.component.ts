import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/domain/carrera';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  carrera:Carrera=new Carrera();

  constructor(private carreraService: CarreraService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.carrera= new Carrera()
        this.carrera = params['contacto']
      }
    }
  
  
    guardar(){
      console.log(this.carrera)
      this.carreraService.save(this.carrera)
      this.carrera= new Carrera()
  
     this.router.navigate(["paginas/listacarreras"]);
  
  
    }

}
