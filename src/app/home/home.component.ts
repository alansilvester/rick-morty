import { Component, OnInit } from '@angular/core';
import { ApiRickService } from '../services/api-rick.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = "";
  url = 'https://rickandmortyapi.com/api/';
  public listApi: any = [];
  validateError = false;
  public imgError = "";
  validateComponent = "character"
  placeholder = "Ingrese un nombre"
  currentPage = "Personajes"
  spinner = true;

  constructor(private apiServices: ApiRickService) { }

  ngOnInit(): void {
    this.url = this.url + this.validateComponent;
  }

  searchCharacter() {
    this.apiServices.getAllData(this.url).subscribe(
      data => {
        this.spinner = false;
        this.listApi = data;
        this.imgError = ""
        if (this.validateComponent == "character") {
          this.addEpisode();
        }
      }
    )
  }

  changeInput() {
    if (this.search == "") {
      this.searchCharacter();
    } else {
      this.apiServices.getByName(this.url, this.search).subscribe(
        data => {
          this.spinner = false;
          this.imgError = ""
          this.listApi = data;
          if (this.validateComponent == "character") {
            this.addEpisode();
          }
        },
        error => {
          this.spinner = false;
          this.listApi = [];
          if (this.validateComponent == "character") {
            this.imgError = "../../../assets/imgs/character.gif"
          } else if (this.validateComponent == "location") {
            this.imgError = "../../../assets/imgs/location.gif"
          }
          else {
            this.imgError = "../../../assets/imgs/episodes.gif"
          }
        }
      )
    }
  }

  addEpisode() {
    for (let index = 0; index < this.listApi.results.length; index++) {
      let min = 0;
      let max = this.listApi.results[index].episode.length - 1;
      let x = Math.floor(Math.random() * (max - min + 1) + min);
      this.apiServices.getByEpisode(this.listApi.results[index].episode[x]).subscribe(
        data => {
          this.listApi.results[index].nameEpisode = data.name;
        }
      )
    }
  }

  validatePage(page: string) {
    this.url = page;
    this.searchCharacter();
  }

  changePages(page: string) {
    this.validateComponent = page;
    if (this.validateComponent == "character") {
      this.placeholder = "Ingrese un nombre";
      this.currentPage = "Personajes";
    } else if (this.validateComponent == "location") {
      this.currentPage = "Planetas";
      this.placeholder = "Ingrese un planeta"
    }
    else {
      this.currentPage = "Episodios";
      this.placeholder = "Ingrese un episodio"
    }
    this.spinner = true;
    this.listApi = [];
    this.url = 'https://rickandmortyapi.com/api/' + this.validateComponent;
    this.imgError = "";
    this.search = "";
  }
}
