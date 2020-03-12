import { Injectable } from '@angular/core';
import { TableDataKecamatan } from "../data/kecamatan";

@Injectable({
  providedIn: 'root',
})
export class KecamatanService extends TableDataKecamatan {

  data = [{
      id: 1,
      namaKecamatan: 'Babakan Madang',
    },
    {
      id: 2,
      namaKecamatan: 'Caringin',
    },
    {
      id: 3,
      namaKecamatan: 'Cariu',
    },
    {
      id: 4,
      namaKecamatan: 'Ciampea',
    },
    {
      id: 5,
      namaKecamatan: 'Ciawi',
    },
    {
      id: 6,
      namaKecamatan: 'Cibinong',
    },
    {
      id: 7,
      namaKecamatan: 'Cibungbulang',
    },
    {
      id: 8,
      namaKecamatan: 'Citeureup',
    },
    {
      id: 9,
      namaKecamatan: 'Ciseeng',
    },
    {
      id: 10,
      namaKecamatan: 'Cisarua',
    },
    {
      id: 11,
      namaKecamatan: 'Ciomas',
    },
    {
      id: 12,
      namaKecamatan: 'Cileungsi',
    },
    {
      id: 13,
      namaKecamatan: 'Cijeruk',
    },
    {
      id: 14,
      namaKecamatan: 'Cigudeg',
    },
    {
      id: 15,
      namaKecamatan: 'Cigombong',
    },
    {
      id: 16,
      namaKecamatan: 'Bojong Gede (Bojonggede)',
    },
    {
      id: 17,
      namaKecamatan: 'Jasinga',
    },
    {
      id: 18,
      namaKecamatan: 'Gunung Sindur',
    },
    {
      id: 19,
      namaKecamatan: 'Gunung Putri',
    },
    {
      id: 20,
      namaKecamatan: 'Dramaga',
    },
    {
      id: 21,
      namaKecamatan: 'Tenjolaya',
    },
    {
      id: 22,
      namaKecamatan: 'Tenjo',
    },
    {
      id: 23,
      namaKecamatan: 'Tanjungsari',
    },
    {
      id: 24,
      namaKecamatan: 'Tamansari',
    },
    {
      id: 25,
      namaKecamatan: 'Tajurhalang',
    },
    {
      id: 26,
      namaKecamatan: 'Sukaraja',
    },
    {
      id: 27,
      namaKecamatan: 'Sukamakmur',
    },
    {
      id: 28,
      namaKecamatan: 'Sukajaya',
    },
    {
      id: 29,
      namaKecamatan: 'Rumpin',
    },
    {
      id: 30,
      namaKecamatan: 'Ranca Bungur',
    },
    {
      id: 31,
      namaKecamatan: 'Parung Panjang',
    },
    {
      id: 32,
      namaKecamatan: 'Parung',
    },
    {
      id: 33,
      namaKecamatan: 'Pamijahan',
    },
    {
      id: 34,
      namaKecamatan: 'Nanggung',
    },
    {
      id: 35,
      namaKecamatan: 'Megamendung',
    },
    {
      id: 36,
      namaKecamatan: 'Leuwisadeng',
    },
    {
      id: 37,
      namaKecamatan: 'Leuwiliang',
    },
    {
      id: 38,
      namaKecamatan: 'Klapanunggal',
    },
    {
      id: 39,
      namaKecamatan: 'Kemang',
    },
    {
      id: 40,
      namaKecamatan: 'Jonggol',
    },
  ];

  getData() {
    console.log('kecamatan', this.data)
    return this.data;
  }
}
