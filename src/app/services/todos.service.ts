import { Injectable } from "@angular/core";
import { HttpResponse } from "@/data/protocols/http";
import { HttpClientService } from "@/infra/http-client-service";
import { Todo } from "../components/todos/interfaces/todos";

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(private httpClientService: HttpClientService) {}

  async getTodos(): Promise<HttpResponse<Todo[]>> {
    return this.httpClientService.get({ url: 'todos' });
  }
}
