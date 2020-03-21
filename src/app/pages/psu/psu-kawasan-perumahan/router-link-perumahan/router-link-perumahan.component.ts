import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {PopupDataPerumahanComponent} from "./popup-data-perumahan.component";

@Component({
  selector: 'ngx-router-link-perumahan',
  templateUrl: './router-link-perumahan.component.html',
  styleUrls: ['./router-link-perumahan.component.scss'],
})
export class RouterLinkPerumahanComponent implements OnInit {


  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true })
  disabledEscTemplate: TemplateRef<HTMLElement>;
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  constructor(private windowService: NbWindowService) {
  }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  openWindowForm() {
    console.log("row data perumahan", this.rowData);
    this.windowService.open(PopupDataPerumahanComponent,
      {
        title: this.rowData.nama_perumahan,
        context: {
          nama_pengembang : this.rowData.nama_pengembang,
          luas_perumahan: this.rowData.luas_perumahan,
          foto: '9',
          kecamatan: this.rowData.kecamatan,
          kelurahan: this.rowData.kelurahan,
          RT: this.rowData.RT,
          RW: this.rowData.RW,
          status: 'Sudah Serah Terima',
          tgl_serah_terima: '13/10/2003',
          no_bast: '660/2565.B/DCK/2003',
          jumlah_psu: 5,
          keterangan: 'Perumahan Bagus',
        },
      });
  }
}
