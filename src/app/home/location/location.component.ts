import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() listCharacter: any;
  @Output() changePage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  validatePage(urlPage: string) {
    this.changePage.emit(urlPage)
  }
}
