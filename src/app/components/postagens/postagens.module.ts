import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostagemService } from "src/app/services/postagem.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { PostagensComponent } from "./postagens.component";
@NgModule({
  declarations: [PostagensComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [PostagensComponent],
  providers: [PostagemService]
})

export class PostagensModule {}
