import { Injectable } from "@angular/core";
import { HttpResponse } from "src/data/protocols/http/http-response";
import { HttpClientService } from "src/infra/http-client-service";
import { Postagem } from "../components/postagens/interfaces/postagem";

@Injectable({
  providedIn: 'root',
})
export class PostagemService {

  constructor(private httpClientService: HttpClientService) {}

  async getPosts(): Promise<HttpResponse<Postagem[]>> {
    return this.httpClientService.get({ url: 'posts' });
  }
}
