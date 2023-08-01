import { NgModule } from '@angular/core';
import { CPFPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [CPFPipe],
  exports: [CPFPipe],
})
export class SharedModule {}
