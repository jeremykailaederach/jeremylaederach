import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
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
    if (this.innerWidth < 1000) {
      this.hidedesktop();
    }
    if (this.innerWidth > 1000) {
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
