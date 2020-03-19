import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TableDataPerumahan } from '../../../../@core/data/perumahan';
import { RouterLinkPerumahanComponent } from "../router-link-perumahan/router-link-perumahan.component";
import { TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {NbComponentStatus} from "@nebular/theme";

@Component({
  selector: 'ngx-entry-data-perumahan',
  templateUrl: './kelola-data-perumahan.html',
  styleUrls: ['./kelola-data-perumahan.component.scss'],
})
export class KelolaDataPerumahanComponent {
  data_rumah_json = '';
  years: any[];
  source: LocalDataSource;
  settings = {
    actions: false,
    add: false,
    edit: false,
    delete: false,

    columns: {
      id: {
        title: 'No.',
        type: 'number',
        filter: false,
      },
      nama_perumahan: {
        name : 'nama_perumahan',
        title: 'Nama Perumahan',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          // console.log("row rumah == ", row, cell);
          return cell;
        },
        renderComponent: RouterLinkPerumahanComponent,
      },
      nama_pengembang: {
        title: 'Nama Pengembang',
        type: 'string',
        filter: false,
      },
      luas_perumahan: {
        title: 'Luas Perumahan (m2)',
        type: 'string',
        filter: false,
      },
      kecamatan: {
        title: 'Kecamatan',
        type: 'string',
        filter: false,
      },
      kelurahan: {
        title: 'Kelurahan / Desa',
        type: 'string',
        filter: false,
      },
      RT: {
        title: 'RT',
        type: 'string',
        filter: false,
      },
      RW: {
        title: 'RT',
        type: 'string',
        filter: false,
      },
    },
  };
  kecamatan: string[];

  status = [ 'Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  constructor(private service: TableDataPerumahan,
              private getKecamatanService: TableDataKecamatan) {

    const data = this.service.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
    this.years.push(2010 + i);
}
  }
  exportAsXLSX() {
    this.service.exportAsExcelFile(this.service.getData(), 'perumahan');
  }
  onFileChange(event) {
    this.data_rumah_json = this.service.importFileExcel(event);
  }

  onFileName(event) {
    document.getElementById('output').innerHTML = this.data_rumah_json;
  }
}
