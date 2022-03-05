import { NgModule } from "@angular/core";
import { MatIconModule, MatToolbarModule } from "@angular/material";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule, MatIconModule],
  exports: [HeaderComponent]
})

export class ComponentsModule {}
