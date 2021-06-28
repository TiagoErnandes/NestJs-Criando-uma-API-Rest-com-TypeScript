import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {

  produtos: Produto[] = [
    new Produto("LVL01","Javascript",29.50),
    new Produto("LVL02","Java",50),
    new Produto("LVL02","C#",40),
    new Produto("LVL02","PHP",20)
  ];

    @Get()
    obterTodos(): Produto[] {
      return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
      return this.produtos[params.id]
    }

    @Post()
    criar(@Body() produto:Produto):string {
     this.produtos.push(produto)
      return `Produto criado com sucesso`
    }
    @Put(':id')
    alterar(@Body() produto:Produto,@Param() params):Produto{
     this.produtos[params] = {...produto}
      return  this.produtos[params]
    }
    @Delete(':id')
    apagar(@Param() params):string {
      this.produtos.pop();
      return `Produto ${params.id} apagado com sucesso`
    }
}