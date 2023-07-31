import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path: 'form',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'form'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
