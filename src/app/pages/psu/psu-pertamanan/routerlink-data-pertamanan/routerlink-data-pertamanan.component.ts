import {Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';
import { PopupPertamananComponent } from "./popup-pertamanan.component";


@Component({
  selector: 'ngx-routerlink-data-pertamanan',
  templateUrl: './routerlink-data-pertamanan.component.html',
  styleUrls: ['./routerlink-data-pertamanan.component.scss'],
})
export class RouterlinkDataPertamananComponent implements OnInit, ViewCell {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

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
    console.log("row data pertamanan", this.rowData);
    this.windowService.open(PopupPertamananComponent,
      {
        title: this.rowData.nama_taman,
        context: {
          nama_taman : this.rowData,
          nama_pelaksana: this.rowData.nama_pelaksana,
          luas_taman: this.rowData.luas_taman,
          foto: '9',
          kecamatan: this.rowData.kecamatan,
          kelurahan: this.rowData.kelurahan,
          RT: this.rowData.RT,
          RW: this.rowData.RW,
          jumlah_petugas: 5,
          keterangan: this.rowData.keterangan,
        },
      });
  }
}
