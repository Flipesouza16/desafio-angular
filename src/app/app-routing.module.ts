import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostagensComponent } from './components/postagens/postagens.component';

const routes: Routes = [
  { path: 'postagens', component: PostagensComponent },
  { path: '**', redirectTo: 'postagens' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
