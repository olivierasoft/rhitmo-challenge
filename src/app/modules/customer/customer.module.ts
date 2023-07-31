import { NgModule } from "@angular/core";
import { CustomerRoutingModule } from "./customer-routing.module";
import { RegisterComponent } from "./views/register/register.component";
import { InputModule } from "../../core/template/input/input.module";

@NgModule({
    declarations: [RegisterComponent],
    imports: [CustomerRoutingModule, InputModule]
})
export class CustomerModule {}
