import {Component, Input } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'ngx-pop-up-data-perumahan',
  templateUrl: './pop-up-data-perumahan.component.html',
  styleUrls: ['./pop-up-data-perumahan.component.scss'],
})
export class PopUpDataPerumahanComponent  {

  @Input() title: string;
  constructor(protected ref: NbDialogRef<PopUpDataPerumahanComponent>) { }

  dismiss() {
    this.ref.close();
  }
}
