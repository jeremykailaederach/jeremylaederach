import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  sidenav: boolean = false;
  nav: boolean = true;
  navbarfixed: boolean = false;

  constructor() { }
  @HostListener('window:scroll', ['$event']) onScroll(){
    if (window.scrollY > 50){
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

  ngOnInit(): void {
  }

  showSidenav() {
    this.sidenav = true;
    this.nav = false;
  }

  hideSidenav() {
    this.sidenav = false;
    this.nav = true;
  }
}
