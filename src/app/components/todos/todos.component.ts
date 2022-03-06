import { TodosService } from '@/app/services';
import { ListTypePages } from '@/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public listTypePages = ListTypePages;
  public todos: Todo[];

  constructor(private todoService: TodosService) { }

  async ngOnInit() {
    const { body: todos } = await this.todoService.getTodos();
    this.todos = todos;
  }

}
