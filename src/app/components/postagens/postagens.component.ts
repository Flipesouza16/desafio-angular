import { Component, OnInit } from '@angular/core';
import { PostagemService } from '@/app/services';
import { Postagem } from './interfaces/postagem';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.scss']
})
export class PostagensComponent implements OnInit {

  public posts: Postagem[];

  constructor(private postagemService: PostagemService) { }

  async ngOnInit() {
    const { body: posts } = await this.postagemService.getPosts();
    this.posts = posts;
  }

}
