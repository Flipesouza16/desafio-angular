import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostagensComponent } from './components/postagens/postagens.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientService } from '@/infra/http-client-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { ComponentsModule } from './shared/components/components.module';
import { AlbunsComponent } from './components/albuns/albuns.component';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PostagensComponent,
    AlbunsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ComponentsModule,
    FormsModule,
  ],
  providers: [HttpClientService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
