import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { StarPageComponent } from './pages/star-page/star-page.component';
import { PreReleasePageComponent } from './pages/pre-release-page/pre-release-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ModalPageComponent,
    StarPageComponent,
    PreReleasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
