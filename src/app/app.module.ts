import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { IConfig, NgxMaskModule } from 'ngx-mask';
import { LayoutModule } from './modules/layout/layout.module';
import { LayoutComponent } from './modules/layout/views/layout/layout.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
