import { Injectable } from "@angular/core";
import { HttpResponse } from "@/data/protocols/http";
import { HttpClientService } from "@/infra/http-client-service";
import { Postagem } from "@/app/components/postagens/interfaces/postagem";

@Injectable({
  providedIn: 'root',
})
export class PostagemService {

  constructor(private httpClientService: HttpClientService) {}

  async getPosts(): Promise<HttpResponse<Postagem[]>> {
    return this.httpClientService.get({ url: 'posts' });
  }
}
