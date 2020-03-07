import { Injectable } from '@angular/core';
import { TableDataPermukiman} from '../data/permukiman';

@Injectable({
  providedIn: 'root',
})
export class PermukimanService extends TableDataPermukiman {

  data = [{
    id: 1,
    nama_tpu: 'TPU Bojong',
    luas_tpu: '1000 m2',
    daya_tampung_tpu: '400',
    kecamatan: 'Cibinong',
    kelurahan: 'Tajur Halang',
    RT: 3,
    RW: 4,
  },
    {
      id: 2,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 3,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 9,
      RW: 4,
    },
    {
      id: 6,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 7,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 8,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 9,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 10,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 11,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 17,
    },
    {
      id: 12,
      nama_tpu: 'TPU Bojong',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }
}
