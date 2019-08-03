import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [   
    CriarCursoComponent
  ],
  imports: [
    CommonModule  
  ],
  //Exportando e expondo module
  exports: [CriarCursoComponent]//,
  //providers: [CursosService]  
})
export class CriarCursoModule { }
