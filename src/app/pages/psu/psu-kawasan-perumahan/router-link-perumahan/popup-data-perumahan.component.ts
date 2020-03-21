import {Component} from '@angular/core';
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-popup-data-perumahan',
  templateUrl: './popup-data-perumahan.component.html',
  styleUrls: ['./popup-data-perumahan.component.scss'],
})
export class PopupDataPerumahanComponent {
  constructor(public windowRef: NbWindowRef) { }
  close() {
    this.windowRef.close();
  }

}
