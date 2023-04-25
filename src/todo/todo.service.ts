import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo,
    ) {}

    async findAll(): Promise<Todo[]> {
        return this.todoModel.findAll();
    }

    async create(title: string, description: string, completed: boolean): Promise<Todo> {
        return this.todoModel.create({ title, description, completed });
    }

    async updateResult(id: number, completed: boolean): Promise<[number, Todo[]]> {
        const [affectedCount, affectedRows] = await this.todoModel.update(
            { completed },
            { where: { id }, returning: true },
        );
        return [affectedCount, affectedRows];
    }

    async updateInfo(id: number, title: string, description: string, completed: boolean): Promise<[number, Todo[]]> {
        const [affectedCount, affectedRows] = await this.todoModel.update(
            { title, description, completed },
            { where: { id }, returning: true },
        );
        return [affectedCount, affectedRows];
    }

    async delete(id: number): Promise<number> {
        return this.todoModel.destroy({ where: { id } });
    }
}