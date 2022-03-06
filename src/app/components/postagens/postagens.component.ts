import { Component, OnInit } from '@angular/core';
import { PostagemService, BuscarService } from '@/app/services';
import { Postagem } from './interfaces/postagem';
import { ListTypePages } from '@/app/shared/interfaces';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {
  public listTypePages = ListTypePages;
  public posts: Postagem[];
  public isLoading = false;

  constructor(private postagemService: PostagemService, private buscarService: BuscarService) { }

  async ngOnInit() {
    this.isLoading = true;
    try {
      const response = await this.postagemService.getPosts();
      const { body: posts } = response;
      this.posts = posts;
      this.buscarService.setFullList(posts);
    } catch(error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  searchedItem(term) {
    const filteredList = this.buscarService.searchOptions(term) as Postagem[];
    this.posts = filteredList;
  }

}
