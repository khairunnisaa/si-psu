import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Location} from '@angular/common';

import {TableDataPerumahan} from '../../../../@core/data/perumahan';
import {RouterLinkPerumahanComponent} from "../router-link-perumahan/router-link-perumahan.component";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";

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
        name: 'nama_perumahan',
        title: 'Nama Perumahan',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          console.log("row rumah == ", row, cell);
          return cell;
        },
        renderComponent: RouterLinkPerumahanComponent,
      },
      nama_pengembang: {
        title: 'Nama Pengembang',
        filter: false,
        type: 'string',
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
      // name: {
      //   title: 'Full Name',
      //   filter: {
      //     type: 'list',
      //     config: {
      //       selectText: 'Select...',
      //       list: [
      //         {value: 'Glenna Reichert', title: 'Glenna Reichert'},
      //         {value: 'Kurtis Weissnat', title: 'Kurtis Weissnat'},
      //         {value: 'Chelsey Dietrich', title: 'Chelsey Dietrich'},
      //       ],
      //     },
      //   },
      // },
      navigasi:
        {
          title: 'Navigasi',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return `<a title="Edit" href="./../../pages/psu-kawasan-perumahan/edit-data-perumahan/${row.id}" class="btn btn-outline-warning btn-lg"> <i class="fa fa-edit"></i></a>
                    <a title="Hapus" href="./../../pages/psu-kawasan-perumahan/hapus-data-perumahan/${row.id}" class="btn btn-outline-danger btn-lg"> <i class="fa fa-trash"></i></a>`
          },
          filter: false,
        },
    },
  };
  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  kecamatan: string[];
  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];
  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;
  /** Disable Slect Kelurahan **/

  status = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];

  constructor(private service: TableDataPerumahan,
              private getKecamatanService: TableDataKecamatan,
              private location: Location) {
    this.source = new LocalDataSource();
    const data = this.service.getData().then((datas) => {
      this.source.load(datas);
    });
    this.kecamatan = this.getKecamatanService.getData();

    this.disableKelurahan = true;
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
      this.years.push(2010 + i);
    }
  }

  changeKecamatan(kecamatan) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'kecamatan',
        search: kecamatan,
      },
    ], true);
    console.log("kecamatan --", kecamatan);
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
    console.log("kelurahan", this.kelurahan);
  }

  changeKelurahan(kelurahan, kecamatan) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'kecamatan',
        search: kecamatan,
      },
      {
        field: 'kelurahan',
        search: kelurahan,
      },
    ], true);
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan, kecamatan)
  }

  exportAsXLSX() {
    // this.service.exportAsExcelFile(this.service.getData(), 'perumahan');
  }

  onFileChange(event) {
    this.data_rumah_json = this.service.importFileExcel(event);
  }

  ngOnInit() {
    this.disableKelurahan = true;
  }

  statusChange(status) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'status',
        search: status,
      },
    ], false);
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", status)
  }

  goBack() {
    this.location.back();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
