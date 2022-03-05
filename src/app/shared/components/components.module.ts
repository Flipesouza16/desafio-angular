import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule, MatListModule, MatToolbarModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { ListItemsComponent } from './list-items/list-items.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeaderComponent, ListItemsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  exports: [HeaderComponent, ListItemsComponent],
})
export class ComponentsModule {}
