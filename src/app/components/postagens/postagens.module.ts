import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PostagemService } from "@/app/services";
import { ComponentsModule } from "@/app/shared/components/components.module";
import { PostagensComponent } from "./postagens.component";

@NgModule({
  declarations: [PostagensComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [PostagensComponent],
  providers: [PostagemService]
})

export class PostagensModule {}
