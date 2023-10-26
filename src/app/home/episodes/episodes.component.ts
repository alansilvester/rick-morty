import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  @Input() listCharacter: any;
  @Output() changePage = new EventEmitter<string>();
  url = 'https://rickandmortyapi.com/api/episode';
  public selected: any = [];
  public chars: any = [];

  constructor(private apiServices: ApiRickService) { }

  ngOnInit(): void {
  }

  validatePage(urlPage: string) {
    this.changePage.emit(urlPage)
  }

  selectedEpisode(name: string) {
    this.apiServices.getByEpisode(this.url + '?name=' + name).subscribe(
      data => {
        this.selected = data.results[0];
        this.addCharEpisode();
      }
    )
  }

  addCharEpisode() {
    for (let i = 0; i < this.selected.characters.length; i++) {
      const element = this.selected.characters[i];
      var char = new Array();

      this.apiServices.getAllData(element).subscribe(
        data => {
          let nameChar = data.name;
          let imageChar = data.image;
          const char = { nameChar, imageChar }
          this.chars.push(char);
        }
      )
    }
  }

}

