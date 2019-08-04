import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'] , 
  providers: [CursosService]
})

export class CursosComponent implements OnInit {

  cursos: string[] = [];
  
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) { 
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    
    //Se inscrevendo para escutar o evento
    CursosService.criouNovoCurso.subscribe(
      //Modo mais comum
      //function(curso){
      //  console.log(curso);
      //}

      //Arrow function Echema Script 6
      curso => this.cursos.push(curso)
    );
  }

}
