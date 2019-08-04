import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    //Emitindo evento para que a aplicação escute
    emitirCursoCriado = new EventEmitter<string>();

    //Cria evento estatico para ser compartilhado entre todas as instâncias
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(){
        console.log('CursosService');
    }

    getCursos() {
        return this.cursos;
    }    

    addCurso(curso: string){
        this.cursos.push(curso);
        //Emiti evento para quem está na mesma instância
        this.emitirCursoCriado.emit(curso);
        //Emiti evento para todas as instância
        CursosService.criouNovoCurso.emit(curso);
    }
}