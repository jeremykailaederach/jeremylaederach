import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  desktop: boolean = true;
  phone: boolean = false;
  public innerWidth: any;

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1405) {
      this.hidedesktop();
    }
    if (this.innerWidth > 1405) {
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
