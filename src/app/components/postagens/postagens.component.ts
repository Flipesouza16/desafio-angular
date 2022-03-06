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

  constructor(private postagemService: PostagemService, private buscarService: BuscarService) { }

  async ngOnInit() {
    const { body: posts } = await this.postagemService.getPosts();
    this.posts = posts;
    this.buscarService.setFullList(posts);
  }

  searchedItem(term) {
    const filteredList = this.buscarService.searchOptions(term) as Postagem[];
    this.posts = filteredList;
  }

}
