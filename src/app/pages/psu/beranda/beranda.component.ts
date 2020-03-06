import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

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
          console.log("row cell == ",row, cell);
          return cell;
      },
      },
      jumlahAset: {
        title: 'Jumlah Aset',
        type: 'string',
        filter : false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
  }
}
