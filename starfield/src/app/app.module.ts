import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ModalPageComponent } from './component/modal-page/modal-page.component';
import { StarPageComponent } from './component/star-page/star-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ModalPageComponent,
    StarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
