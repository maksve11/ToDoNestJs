import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todo extends Model<Todo> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    completed: boolean;
}