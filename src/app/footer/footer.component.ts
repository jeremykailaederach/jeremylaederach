import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navbarfixed: boolean = false;
  desktop: boolean = true;
  phone: boolean = false;
  public innerWidth: any;

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:scroll', ['$event']) onScroll(){
    if (window.scrollY > 50){
      this.navbarfixed = true;
    }
    else {
      this.navbarfixed = false;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1400) {
      this.hidedesktop();
    }
    if (this.innerWidth > 1400) {
      this.showdesktop();
    }
  }

  showdesktop() {
    this.desktop = true;
    this.phone = false;
  }

  hidedesktop() {
    this.desktop = false;
    this.phone = true;
  }
}
