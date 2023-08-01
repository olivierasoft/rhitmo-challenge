import { NgModule } from "@angular/core";
import { SectorTitleComponent } from "./components/sector-title/sector-title.component";

const components = [SectorTitleComponent]

@NgModule({
  declarations: components,
  exports: components
})
export class LabelModule {}
