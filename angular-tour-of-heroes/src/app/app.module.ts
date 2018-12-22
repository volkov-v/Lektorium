import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HttpClientModule} from "@angular/common/http";
import {ServService} from "./serv.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
