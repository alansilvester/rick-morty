import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './home/characters/characters.component';
import { LocationComponent } from './home/location/location.component';
import { EpisodesComponent } from './home/episodes/episodes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ErrorComponent } from './home/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationComponent,
    EpisodesComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: 'home', component: HomeComponent}, { path: '', redirectTo: '/home', pathMatch: 'full' }]),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
