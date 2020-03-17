import { Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TableDataPermukiman } from '../../../../@core/data/permukiman';
import { TableDataKecamatan } from "../../../../@core/data/kecamatan";

import {RouterlinkKawasanPermukimanComponent} from "../routerlink-kawasan-permukiman/routerlink-kawasan-permukiman.component";

@Component({
  selector: 'ngx-kelola-data-permukiman',
  templateUrl: './kelola-data-permukiman.component.html',
  styleUrls: ['./kelola-data-permukiman.component.scss'],
})
export class KelolaDataPermukimanComponent {

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
      nama_tpu: {
        title: 'Nama Tempat Pemakaman Umum (TPU)',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          console.log('row cell === ', row, cell);
          return cell;
        },
        renderComponent: RouterlinkKawasanPermukimanComponent,
      },
      luas_tpu: {
        title: 'Luas TPU',
        type: 'string',
        filter: false,
      },
      daya_tampung_tpu: {
        title: 'Daya Tampung',
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
  status = [ 'Baik', 'Rusak Ringan', 'Rusak Berat'];
  constructor(
    private service: TableDataPermukiman,
    private getKecamatanService: TableDataKecamatan,
  ) {
    const data = this.service.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
