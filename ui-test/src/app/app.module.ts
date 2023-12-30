import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YupmaUiKitModule } from '@yupma/ui-kit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YupmaUiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
