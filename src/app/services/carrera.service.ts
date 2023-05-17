import { Injectable } from '@angular/core';
import { Carrera } from 'src/domain/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor() { }

  Carrera :Carrera[]=[]

  

  save(contacto:Carrera){

    this.Carrera .push(contacto)
    console.log(this.Carrera );
    
  }
  getlist(){
return this.Carrera 

  }


}
