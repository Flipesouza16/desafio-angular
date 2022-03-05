import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ListItemsComponent } from './list-items/list-items.component';
import { MatIconModule, MatListModule, MatToolbarModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent, ListItemsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [HeaderComponent, ListItemsComponent],
})
export class ComponentsModule {}
