import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './modules/layout/layout.module';
import { LayoutComponent } from './modules/layout/views/layout/layout.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
