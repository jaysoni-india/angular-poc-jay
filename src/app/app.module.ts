import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { AppNavComponent } from './inc/app-nav/app-nav.component';
import { AppFooterComponent } from './inc/app-footer/app-footer.component';
import {AppRoutingModule} from './app-routing.module';
import { VerifyComponent } from './components/verify/verify.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    CommingSoonComponent,
    AppNavComponent,
    AppFooterComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
