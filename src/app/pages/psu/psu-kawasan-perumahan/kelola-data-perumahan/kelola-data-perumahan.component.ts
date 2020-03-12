import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { TableDataPerumahan } from '../../../../@core/data/perumahan';
import { RouterLinkPerumahanComponent } from "../router-link-perumahan/router-link-perumahan.component";
import { TableDataKecamatan} from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-entry-data-perumahan',
  templateUrl: './kelola-data-perumahan.html',
  styleUrls: ['./kelola-data-perumahan.component.scss'],
})
export class KelolaDataPerumahanComponent {
  years: any[];
  source: LocalDataSource;
  settings = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
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
        title: 'Luas Perumahan',
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
