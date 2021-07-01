import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import {ApiServiceService} from './api-service.service'
import { from } from 'rxjs';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Demo1Component } from './demo1/demo1.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
