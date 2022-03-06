import { Component, OnInit } from "@angular/core";
import { BuscarService } from "@/app/shared/services";
import { PostagemService } from "./services";
import { Postagem } from "./interfaces";
import { ListTypePages } from "@/app/shared/interfaces";
import { UtilsService } from "@/app/shared/services/utils.service";

@Component({
  selector: "app-postagens",
  templateUrl: "./postagens.component.html",
  styleUrls: ["./postagens.component.scss"],
})
export class PostagensComponent implements OnInit {
  public listTypePages = ListTypePages;
  public posts: Postagem[];
  public isLoading = false;

  constructor(
    private postagemService: PostagemService,
    private buscarService: BuscarService,
    private utilsService: UtilsService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getPosts();
  }

  async getPosts(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.postagemService.getPosts();
      const { body: posts } = response;
      this.posts = posts;
      this.buscarService.setFullList(posts);
    } catch (error) {
      console.error(error);
      this.utilsService.openSnackBar(
        "Erro inesperado ao buscar por Postagens",
        "FECHAR"
      );
    } finally {
      this.isLoading = false;
    }
  }

  searchedItem(term: string): void {
    this.posts = this.buscarService.searchOptions(term) as Postagem[];
  }
}
