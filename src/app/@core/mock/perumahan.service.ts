import { Injectable } from '@angular/core';
import { TableDataPerumahan } from '../data/perumahan';

@Injectable({
  providedIn: 'root',
})
export class PerumahanService extends TableDataPerumahan {

  data = [{
    id: 1,
    nama_perumahan: 'Bumi Citra Asri',
    nama_pengembang: 'Rizcon Hasanah',
    luas_perumahan: '36/72',
    kecamatan: 'Cibinong',
    kelurahan: 'Tajur Halang',
    RT: 3,
    RW: 4,
  },
    {
      id: 2,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
  },
    {
      id: 3,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '36/72',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },


  ];

  getData() {
    return this.data;
  }
}
