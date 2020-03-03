import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../@core/data/smart-table';
import {DetailBerandaComponent} from '../detail-beranda/detail-beranda.component';

@Component({
  selector: 'ngx-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
})
export class BerandaComponent implements OnInit {

  ngOnInit() {
  }
  settings = {
    actions: false,
    columns: {
      no: {
        title: 'No',
        type: 'number',
        filter : false,
      },
      namaSeksi: {
        name: 'namaSeksi',
        title: 'Nama Seksi ',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return `<a title="See Detail Product "href="Your api key or something/${row.namaSeksi}">
          <i class="ion-edit"></i></a>`;
      },
        renderComponent: DetailBerandaComponent,
      },
      jumlahAset: {
        title: 'Jumlah Aset',
        type: 'string',
        filter : false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  cell: '';

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }
}
