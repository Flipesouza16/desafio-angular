import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { PostagensComponent } from './components/postagens/postagens.component';

const routes: Routes = [
  { path: 'postagens', component: PostagensComponent },
  { path: 'albuns', component: AlbunsComponent },
  { path: '**', redirectTo: 'postagens' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
