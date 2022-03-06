import { BuscarService, TodosService } from '@/app/services';
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
  public isLoading = false;

  constructor(private todoService: TodosService, private buscarService: BuscarService) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      const { body: todos } = await this.todoService.getTodos();
      this.todos = todos;
      this.buscarService.setFullList(todos);
    } catch(error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  searchedItem(term) {
    const filteredList = this.buscarService.searchOptions(term) as Todo[];
    this.todos = filteredList;
  }
}
