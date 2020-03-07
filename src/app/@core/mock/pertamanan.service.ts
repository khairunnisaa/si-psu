import { Injectable } from '@angular/core';
import { TableDataPertamanan } from '../data/pertamanan';

@Injectable({
  providedIn: 'root',
})
export class PertamananService extends TableDataPertamanan {

  data = [{
    id: 1,
    nama_taman: 'TPU Bojong',
    nama_pelaksana: '1000 m2',
    luas_taman: 'Cibinong',
    kecamatan: 'Gelonding',
    kelurahan: 'Tajur Halang',
    RT: 3,
    RW: 4,
  },
    {
      id: 2,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 3,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 9,
      RW: 4,
    },
    {
      id: 6,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 7,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 8,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 9,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 10,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 11,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 17,
    },
    {
      id: 12,
      nama_taman: 'TPU Bojong',
      nama_pelaksana: '1000 m2',
      luas_taman: 'Cibinong',
      kecamatan: 'Gelonding',
      kelurahan: 'Tajur Halang',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }
}
