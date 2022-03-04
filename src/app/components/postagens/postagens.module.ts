import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostagemService } from "src/app/services/postagem.service";
import { PostagensComponent } from "./postagens.component";

@NgModule({
  declarations: [PostagensComponent],
  imports: [CommonModule],
  exports: [PostagensComponent],
  providers: [PostagemService]
})

export class PostagensModule {}
