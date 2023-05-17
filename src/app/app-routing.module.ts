import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ListacarrerasComponent } from './pages/listacarreras/listacarreras.component';

const routes: Routes = [

  {path:"paginas/formulario", component:FormularioComponent},
  {path:"paginas/informacion", component:InformacionComponent},
  {path:"paginas/listacarreras", component:ListacarrerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
