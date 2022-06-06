import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
  desktop: boolean = true;
  phone: boolean = false;
  public innerWidth: any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1800) {
      this.hidedesktop();
    }
    if (this.innerWidth > 1800) {
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
