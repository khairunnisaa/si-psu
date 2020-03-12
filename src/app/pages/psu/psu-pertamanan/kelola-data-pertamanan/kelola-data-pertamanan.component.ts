import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {DetailPertamananComponent} from '../detail-pertamanan/detail-pertamanan.component';
import {TableDataPertamanan} from '../../../../@core/data/pertamanan';
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-kelola-data-pertamanan',
  templateUrl: './kelola-data-pertamanan.component.html',
  styleUrls: ['./kelola-data-pertamanan.component.scss'],
})
export class KelolaDataPertamananComponent {
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
        valuePrepareFunction: (cell, row) => {
          console.log('row cell === ', row, cell);
          return cell;
        },
        renderComponent: DetailPertamananComponent,
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
    },
  };
  kecamatan: string[];
  constructor(private service: TableDataPertamanan,
              private getKecamatanService: TableDataKecamatan) {

    const data = this.service.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
      this.years.push(2010 + i);
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
