import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() changePage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changePages(page: string){
    this.changePage.emit(page)
  }
}
