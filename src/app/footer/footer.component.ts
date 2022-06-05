import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
}
