import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/modules/categoria.module';
import { Postagem } from './postagem/entities/postagem.entity'; 
import { PostagemModule } from './postagem/modules/postagem.modules';
import { PostagemService } from './postagem/service/postagem.service';

@Module({
  imports: [
   /*
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gen134679',
      database: 'db_projetodoesaude',
      entities: [Postagem, Categoria],
      synchronize: true
    }),
*/
    

    TypeOrmModule.forRoot({

      type: 'postgres',
      url: process.env.DATABASE_URL,  
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
      synchronize: true

    }),


    PostagemModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
