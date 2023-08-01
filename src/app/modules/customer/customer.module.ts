import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { RegisterComponent } from './views/register/register.component';
import { InputModule } from '../../core/template/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from 'src/app/core/template/label/label.module';
import { ListComponent } from './views/list/list.component';
import { CustomerProvider } from 'src/app/core/providers/customer.provider';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [RegisterComponent, ListComponent],
  providers: [CustomerProvider],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    CommonModule,
    InputModule,
    LabelModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
})
export class CustomerModule {}
