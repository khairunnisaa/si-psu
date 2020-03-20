import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <img src="../../../../assets/images/lambang%20kab.bogor.jpg">
    <span class="created-by"><b>
      <a href="" target="_blank" style="text-align: center">Pemerintah Kabupaten Bogor</a> 2020</b></span>
    <b>{{ time | date: 'hh:mm:ss a' }}</b>
  `,
})
export class FooterComponent implements OnInit {
  time = new Date();

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
