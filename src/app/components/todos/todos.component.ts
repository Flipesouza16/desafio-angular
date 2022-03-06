import { BuscarService } from "@/app/shared/services";
import { ListTypePages } from "@/app/shared/interfaces";
import { Component, OnInit } from "@angular/core";
import { Todo } from "./interfaces";
import { TodosService } from "./services";
import { UtilsService } from "@/app/shared/services/utils.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  public listTypePages = ListTypePages;
  public todos: Todo[];
  public isLoading = false;

  constructor(
    private todoService: TodosService,
    private buscarService: BuscarService,
    private utilsService: UtilsService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getTodos();
  }

  async getTodos(): Promise<void> {
    this.isLoading = true;
    try {
      const { body: todos } = await this.todoService.getTodos();
      this.todos = todos;
      this.buscarService.setFullList(todos);
    } catch (error) {
      console.error(error);
      this.utilsService.openSnackBar(
        "Erro inesperado ao buscar por TO-DOs",
        "FECHAR"
      );
    } finally {
      this.isLoading = false;
    }
  }

  searchedItem(term: string): void {
    this.todos = this.buscarService.searchOptions(term) as Todo[];
  }
}
