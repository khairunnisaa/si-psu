import { Injectable } from '@angular/core';
import { TableDataKelurahan } from "../data/kelurahan";

@Injectable({
  providedIn: 'root',
})
export class KelurahanService extends TableDataKelurahan {

  data = [{
    id: 1,
    nama_perumahan: 'Bumi Citra Asri',
    nama_pengembang: 'Rizcon Hasanah',
    luas_perumahan: '10.000 m2',
    kecamatan: 'Cibinong',
    kelurahan: 'Tajur Halang',
    RT: 3,
    RW: 4,
  },
    {
      id: 2,
      nama_perumahan: 'Tajur Halang Indah',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1700 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 3,
      nama_perumahan: 'Perumahan Griya Asri Indah',
      nama_pengembang: 'Pondasi Nenek Mertua',
      luas_perumahan: '9000 m2',
      kecamatan: 'Citayam',
      kelurahan: 'Kemanggisan Timur',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Marban Cahaya Raya',
      nama_pengembang: 'Prima Jaya',
      luas_perumahan: '9000 m2',
      kecamatan: 'Bojong Gede',
      kelurahan: 'PGRI',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_perumahan: 'Bojong Indah Permai',
      nama_pengembang: 'Prima Jaya',
      luas_perumahan: '1890 m2',
      kecamatan: 'Citayam',
      kelurahan: 'Kinang Rejo',
      RT: 9,
      RW: 4,
    },
    {
      id: 6,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 7,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '3900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 8,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '2480 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 9,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '8000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 10,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 11,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 17,
    },
    {
      id: 12,
      nama_perumahan: 'Kemanggisan Permai Indah',
      nama_pengembang: 'Propan Jaya',
      luas_perumahan: '9000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tonjong',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }
}


