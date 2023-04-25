import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo/todo.model';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 1433,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      models: [Todo],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Todo]),
  ],
  providers: [TodoService],
  controllers: [TodoController],
})
export class AppModule {}

