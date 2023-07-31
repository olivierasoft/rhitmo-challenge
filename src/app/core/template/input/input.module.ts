import { NgModule } from "@angular/core";
import { InputGroupComponent } from "./components/input-group/input.group.component";
import { InputRowComponent } from "./components/input-row/input-row.component";

const components = [InputRowComponent, InputGroupComponent];

@NgModule({
  declarations: components,
  exports: components
})
export class InputModule {}
