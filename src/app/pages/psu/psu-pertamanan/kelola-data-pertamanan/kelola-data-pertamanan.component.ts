import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {DetailPertamananComponent} from '../detail-pertamanan/detail-pertamanan.component';
import {TableDataPertamanan} from '../../../../@core/data/pertamanan';

@Component({
  selector: 'ngx-kelola-data-pertamanan',
  templateUrl: './kelola-data-pertamanan.component.html',
  styleUrls: ['./kelola-data-pertamanan.component.scss'],
})
export class KelolaDataPertamananComponent {
  source: LocalDataSource;
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

  constructor(private service: TableDataPertamanan) {
    const data = this.service.getData();
    this.source = new LocalDataSource(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
