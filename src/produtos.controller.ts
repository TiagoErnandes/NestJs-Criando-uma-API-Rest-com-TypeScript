import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {
    @Get()
    obterTodos(): string {
      return 'Lista Todos os Produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string {
      return `Retorna os dados do produto ${params.id}`
    }

    @Post()
    criar(@Body() produto):string {
      console.log(produto)
      return `Produto criado com sucesso`
    }
    @Put(':id')
    alterar(@Body() produto,@Param() params): string {
      console.log(produto);
      return `Produto Alterado id ${params.id}`
    }
    @Delete(':id')
    apagar(@Param() params):string {
      return `Produto ${params.id} apagado com sucesso`
    }
}