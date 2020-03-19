import { Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TableDataPerumahan } from '../../../../@core/data/perumahan';
import { RouterLinkPerumahanComponent } from "../router-link-perumahan/router-link-perumahan.component";
import { TableDataKecamatan} from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-entry-data-perumahan',
  templateUrl: './kelola-data-perumahan.html',
  styleUrls: ['./kelola-data-perumahan.component.scss'],
})
export class KelolaDataPerumahanComponent implements OnInit {
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
  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/

  status = [ 'Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  constructor(private service: TableDataPerumahan,
              private getKecamatanService: TableDataKecamatan) {

    const data = this.service.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
    this.years.push(2010 + i);
}
  }

  changeKecamatan(kecamatan) {
    console.log("kecamatan --", kecamatan);
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
    console.log("kelurahan", this.kelurahan);
  }

  changeKelurahan(kelurahan) {
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan)
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
  ngOnInit() {
    this.disableKelurahan = true;
  }
}
