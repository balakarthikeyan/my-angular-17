import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
	selector: 'app-todo-item',
	standalone: true,
	imports: [],
	templateUrl: './todo-item.component.html',
	styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements Todo {
	@Input({ required: true })
	id!: number;
	@Input({ required: true })
	text!: string;
	@Input({ required: true })
	completed!: boolean;

	@Output()
	completeChange: EventEmitter<number> = new EventEmitter<number>();
	@Output()
	delete: EventEmitter<number> = new EventEmitter<number>();

	handleCompletitionChange(id: number): void {
		this.completeChange.emit(id);
	}

	deleteTodo(id: number): void {
		this.delete.emit(id);
	}
}