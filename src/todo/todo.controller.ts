import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { todos } from '../todos-mock';
import { TodoDTO } from "./todo.dto";

let todosData = todos;

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(): TodoDTO[] {
        return todosData;
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Post()
    async create(@Body('title') title: string, @Body('description') description: string, @Body('completed') completed: boolean): Promise<Todo> {
        return this.todoService.create(title, description, completed);
    }

    @Put(':id')
    async updateResult(@Param('id') id: number, @Body('completed') completed: boolean): Promise<[number, Todo[]]> {
        return this.todoService.updateResult(id, completed);
    }

    @Put(':id')
    async updateInfo(@Param('id') id: number, @Body() todo: Todo): Promise<[number, Todo[]]> {
        const { title, description, completed } = todo;
        return this.todoService.updateInfo(id, title, description, completed);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<number> {
        return this.todoService.delete(id);
    }
}