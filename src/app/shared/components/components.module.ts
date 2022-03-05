import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule, MatToolbarModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
