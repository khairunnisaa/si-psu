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
          nama_perumahan : this.rowData.nama_perumahan,
          nama_pengembang : this.rowData.nama_pengembang,
          luas_perumahan: this.rowData.luas_perumahan,
          jumlah_rumah: this.rowData.jumlah_rumah,
          foto: this.rowData.foto.length,
          kecamatan: this.rowData.kecamatan,
          kelurahan: this.rowData.kelurahan,
          RT: this.rowData.RT,
          RW: this.rowData.RW,
          status: this.rowData.status,
          tgl_serah_terima: this.rowData.tgl_serah_terima,
          no_bast: this.rowData.no_bast,
          sph: this.rowData.sph,
          jumlah_psu: this.rowData.jumlah_psu,
          keterangan: this.rowData.keterangan,
          cctv: this.rowData.cctv.video,
          dataPerumahan : this.rowData,
        },
      });
  }
}
