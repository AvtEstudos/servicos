import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    //Emitindo evento para que a aplicação escute
    emitirCursoCriado = new EventEmitter<string>();

    //Cria evento estatico para ser compartilhado entre todas as instâncias
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de curso');
        return this.cursos;
    }    

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        //Emiti evento para quem está na mesma instância
        this.emitirCursoCriado.emit(curso);
        //Emiti evento para todas as instância
        CursosService.criouNovoCurso.emit(curso);
    }
}