import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiRickService } from 'src/app/services/api-rick.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() listCharacter: any;
  @Input() spinner: any;
  @Output() changePage = new EventEmitter<string>();

  selectedCharacter: any = [];
  compareCharacter: any = [];
  duplicate: any = [];
  compareValidate = false;
  countEpisode = 0;
  tittle = false;
  url = 'https://rickandmortyapi.com/api/character/';

  constructor(private serviceApi: ApiRickService) { }

  ngOnInit(): void {
  }

  validatePage(urlPage: string) {
    this.changePage.emit(urlPage)
  }

  saveId(id: number, name: string) {
    const user = { id, name }
    for (let i = 0; i < this.selectedCharacter.length; i++) {
      const element = this.selectedCharacter[i];
      if (element.id == id) {
        swal("Error!", "Ya agregó este personaje", "error");
        return;
      }
    }
    if (this.selectedCharacter.length > 2) {
      swal("Error!", "Solo puedes seleccionar 3 personajes", "error");
    } else {
      this.selectedCharacter.push(user);
      swal("Excelente!", "Se agregó correctamente!", "success");
    }
  }

  deleteChar(index: number) {
    this.selectedCharacter.splice(index, 1);
  }

  clear() {
    this.compareCharacter = [];
    this.selectedCharacter = [];
    this.compareValidate = false;
  }

  searchCompare() {
    this.compareValidate = true;
    let idSelected: any = [];
    this.countEpisode = 0;
    for (let index = 0; index < this.selectedCharacter.length; index++) {
      const element = this.selectedCharacter[index];
      idSelected.push(element.id)
    }
    this.serviceApi.getAllData(this.url + idSelected).subscribe(
      data => {
        this.compareCharacter = data;
        let arr_first: any = [];
        let arr_second: any = [];

        for (let i = 0; i < this.compareCharacter.length; i++) {
          const element = this.compareCharacter[i];
          if (i == 0) {
            arr_first = [...element.episode]
          } else if (i == 1) {
            arr_second = [...element.episode]
            for (let j = 0; j < arr_second.length; j++) {
              const element2 = arr_second[j];
              if (arr_first.includes(element2)) {
                this.countEpisode++;
              }
            }
          } else {
            this.countEpisode = 0;
            arr_first = [...element.episode]
            for (let j = 0; j < arr_second.length; j++) {
              const element3 = arr_second[j];
              if (arr_first.includes(element3)) {
                this.countEpisode++;
              }
            }
          }
        }
      }
    )
  }
}
