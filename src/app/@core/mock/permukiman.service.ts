import { Injectable } from '@angular/core';
import { TableDataPermukiman} from '../data/permukiman';

@Injectable({
  providedIn: 'root',
})
export class PermukimanService extends TableDataPermukiman {

  data = [{
    id: 1,
    nama_tpu: 'TPU Kuburan Kecil Padurenan',
    luas_tpu: '200 m2',
    daya_tampung_tpu: '400',
    kecamatan: 'Gunung Sindur',
    kelurahan: 'Padurenan',
    RT: 18,
    RW: 1,
  },
    {
      id: 2,
      nama_tpu: 'TPU Cipenjo',
      luas_tpu: '700 m2',
      daya_tampung_tpu: '4560',
      kecamatan: 'Cileungsi',
      kelurahan: 'Cipenjo',
      RT: 13,
      RW: 24,
    },
    {
      id: 3,
      nama_tpu: 'TPU Bojong Kulur',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Gunung Putri',
      kelurahan: 'Bojong Kulur',
      RT: 13,
      RW: 1,
    },
    {
      id: 4,
      nama_tpu: 'TPU Pondok Rajeg',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Cibinong',
      kelurahan: 'Pondok Rejeg',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_tpu: 'TPU Cirimekar',
      luas_tpu: '1800 m2',
      daya_tampung_tpu: '4708',
      kecamatan: 'Cibinong',
      kelurahan: 'Cirimekar',
      RT: 2,
      RW: 4,
    },
    {
      id: 6,
      nama_tpu: 'TPU Batu Bongkok',
      luas_tpu: '1080 m2',
      daya_tampung_tpu: '470',
      kecamatan: 'Cibinong',
      kelurahan: 'Pabuaran',
      RT: 7,
      RW: 45,
    },
    {
      id: 7,
      nama_tpu: 'TPU Jonggol Bogor',
      luas_tpu: '1078 m2',
      daya_tampung_tpu: '490',
      kecamatan: 'Jonggol',
      kelurahan: 'Singasari',
      RT: 63,
      RW: 45,
    },
    {
      id: 8,
      nama_tpu: 'TPU Gadog',
      luas_tpu: '1790 m2',
      daya_tampung_tpu: '880',
      kecamatan: 'Cibinong',
      kelurahan: 'Tegar Beriman',
      RT: 33,
      RW: 42,
    },
    {
      id: 9,
      nama_tpu: 'TPU Belender',
      luas_tpu: '107 m2',
      daya_tampung_tpu: '450',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 43,
      RW: 2,
    },
    {
      id: 10,
      nama_tpu: 'TPU Pasarean',
      luas_tpu: '1000 m2',
      daya_tampung_tpu: '400',
      kecamatan: 'Sukaraja',
      kelurahan: 'Cilebut',
      RT: 32,
      RW: 12,
    },
    {
      id: 11,
      nama_tpu: 'TPU Warga Griya Alam Sentosa',
      luas_tpu: '1903 m2',
      daya_tampung_tpu: '8000',
      kecamatan: 'Cileungsi',
      kelurahan: 'Pasar Angin',
      RT: 53,
      RW: 7,
    },
    {
      id: 12,
      nama_tpu: 'TPU Ciburuy',
      luas_tpu: '157 m2',
      daya_tampung_tpu: '448',
      kecamatan: 'Cigombong',
      kelurahan: 'Ciburuy',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }
}
