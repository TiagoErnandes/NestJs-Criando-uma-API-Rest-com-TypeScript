import { livrosController } from './livros.controller';
import { LivrosService } from './livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Livro} from './livro.model'
import { ConfigModule } from '@nestjs/config';

@Module({
   imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro])
  ],
  controllers: [AppController,livrosController],
  providers: [AppService,LivrosService],
})
export class AppModule {}
