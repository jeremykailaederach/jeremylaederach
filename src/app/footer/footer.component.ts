import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText: string = "";

  constructor() { }

  ngOnInit(): void {
    var time = new Date().getHours();
    if (time < 11){
      this.footerText = "Good morning";
    }
    else if (time < 15){
      this.footerText = "Good afternoon";
    }
    else if (time < 24){
      this.footerText = "Good evening";
    }
  }

}
