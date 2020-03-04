import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  name = 'Angular';
  time = new Date();
  timer;
  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
