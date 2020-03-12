import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-popup-pertamanan',
  template: `
    <form class="form">
      <label for="subject">Subject:</label>
      <input nbInput id="subject" type="text">

      <label class="text-label" for="text">Text:</label>
      <textarea nbInput id="text"></textarea>
      <a routerLink="../../../pages/psu-pertamanan/detail-pertamanan"
         (click)="close()">Selengkapnya...</a>
    </form>
  `,
  styleUrls: ['./popup-pertamanan.component.scss'],
})
export class PopupPertamananComponent {

  constructor(public windowRef: NbWindowRef) { }

  close() {
    this.windowRef.close();
  }

}
