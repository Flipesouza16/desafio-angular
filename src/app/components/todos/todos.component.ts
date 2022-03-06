import { BuscarService } from '@/app/shared/services';
import { ListTypePages } from '@/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces';
import { TodosService } from './services';

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

  async ngOnInit(): Promise<void> {
   await this.getTodos();
  }

  async getTodos(): Promise<void> {
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

  searchedItem(term: string): void {
    this.todos = this.buscarService.searchOptions(term) as Todo[];
  }
}
