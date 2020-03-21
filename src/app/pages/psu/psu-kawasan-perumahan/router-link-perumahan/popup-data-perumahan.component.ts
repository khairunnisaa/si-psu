import {Component, Input} from '@angular/core';
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-popup-data-perumahan',
  templateUrl: './popup-data-perumahan.component.html',
  styleUrls: ['./popup-data-perumahan.component.scss'],
})
export class PopupDataPerumahanComponent {
  @Input() nama_pengembang: string;
  @Input() luas_perumahan: string;
  @Input() foto: string;
  @Input() kecamatan: string;
  @Input() kelurahan: string;
  @Input() RT: string;
  @Input() RW: string;
  @Input() status: string;
  @Input() tgl_serah_terima: string;
  @Input() no_bast: string;
  @Input() jumlah_psu: string;
  @Input() keterangan: string;
  @Input() detailPerumahan: string;

  constructor(public windowRef: NbWindowRef) { }
  close() {
    this.windowRef.close();
  }

}
