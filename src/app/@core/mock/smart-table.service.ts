import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    no: 1,
    namaSeksi: 'PSU Perumahan',
    jumlahAset: 100,
  },
    {
      no: 2,
      namaSeksi: 'PSU Kawasan Permukiman',
      jumlahAset: 100,
    },
    {
      no: 3,
      namaSeksi: 'PSU Pertamanan',
      jumlahAset: 100,
    },
  ];

  getData() {
    return this.data;
  }
}
