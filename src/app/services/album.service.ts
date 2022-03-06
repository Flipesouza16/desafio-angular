import { Injectable } from "@angular/core";
import { HttpResponse } from "@/data/protocols/http";
import { HttpClientService } from "@/infra/http-client-service";
import { Album } from "../components/albuns/interfaces/album";

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  constructor(private httpClientService: HttpClientService) {}

  async getAlbums(): Promise<HttpResponse<Album[]>> {
    return this.httpClientService.get({ url: 'albums' });
  }
}
