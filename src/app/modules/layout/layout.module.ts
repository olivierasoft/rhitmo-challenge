import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InputModule } from "src/app/core/template/input/input.module";
import { SharedModule } from "../shared/shared.module";
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TitleComponent } from "./components/title/title.component";
import { LayoutComponent } from "./views/layout/layout.component";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    InputModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    ContentComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TitleComponent
  ],
  providers: [],
  exports: [LayoutComponent]
})
export class LayoutModule {}
