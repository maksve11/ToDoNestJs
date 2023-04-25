export class TodoDTO {
    id?: string;
    title: string;
    description?: string;
    status: 'todo' | 'done' | 'in progress'
}