import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { CharactersComponent } from "./home/characters/characters.component";
import { EpisodesComponent } from "./home/episodes/episodes.component";
import { HomeComponent } from "./home/home.component";
import { LocationComponent } from "./home/location/location.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'character', component: CharactersComponent },
  { path: 'location', component: LocationComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '**', component: HomeComponent  },

];
