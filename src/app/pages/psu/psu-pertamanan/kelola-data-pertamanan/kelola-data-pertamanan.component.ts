import { Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {TableDataPertamanan} from '../../../../@core/data/pertamanan';
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {RouterlinkDataPertamananComponent} from "../routerlink-data-pertamanan/routerlink-data-pertamanan.component";
import {Location} from '@angular/common';

@Component({
  selector: 'ngx-kelola-data-pertamanan',
  templateUrl: './kelola-data-pertamanan.component.html',
  styleUrls: ['./kelola-data-pertamanan.component.scss'],
})
export class KelolaDataPertamananComponent implements OnInit {
  source: LocalDataSource;
  years: any[];
  settings = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'No.',
        type: 'number',
        filter: false,
      },
      nama_taman: {
        title: 'Nama Taman',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell) => {
          return cell;
        },
        renderComponent: RouterlinkDataPertamananComponent,
      },
      nama_pelaksana: {
        title: 'Nama Pelaksana',
        type: 'string',
        filter: false,
      },
      luas_taman: {
        title: 'Luas Taman',
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
      navigasi:
        {
          title: 'Navigasi',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return `<a title="Edit" href="./../../pages/psu-kawasan-perumahan/input-data-perumahan/${row.id}" class="btn btn-outline-warning btn-lg"> <i class="fa fa-edit"></i></a>
                    <a title="Hapus" href="./../../pages/psu-kawasan-perumahan/input-data-perumahan/${row.id}" class="btn btn-outline-danger btn-lg"> <i class="fa fa-trash"></i></a>`
          },
          filter: false,
        },
     },
  };
  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/

  constructor(private service: TableDataPertamanan,
              private getKecamatanService: TableDataKecamatan,
              private location: Location) {
    this.source = new LocalDataSource();
    const data = this.service.getData().then((datas) => {
      console.log("datapertamanan", datas);
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.disableKelurahan = true;
  }
  goBack() {
    this.location.back();
  }
}
