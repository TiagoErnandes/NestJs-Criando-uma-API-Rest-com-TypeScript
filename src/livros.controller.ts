import { LivrosService } from './livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';

@Controller('livros')
export class livrosController {

  constructor(private livroService:LivrosService){

  }


    @Get()
   async obterTodos(): Promise<Livro[]> {
      return this.livroService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livro> {
      return this.livroService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() livro:Livro) {
     this.livroService.criar(livro)
    
    }
    @Put(':id')
    async alterar(@Body() livro:Livro,@Param() params):Promise<[number,Livro[]]>{ 
      return  this.livroService.alterar(livro)
    }
    @Delete(':id')
    async apagar(@Param() params){
      return this.livroService.apagar(params.id)    
    }
}