import { Injectable } from '@angular/core';
import { TableDataPertamanan } from '../data/pertamanan';

@Injectable({
  providedIn: 'root',
})
export class PertamananService extends TableDataPertamanan {

  data = [{
    id: 1,
    nama_taman: 'Pemda Park',
    nama_pelaksana: 'Adhi Karya',
    luas_taman: '1000 m2',
    kecamatan: 'Cibinong',
    kelurahan: 'Tegar Beriman',
    RT: 13,
    RW: 4,
  },
    {
      id: 2,
      nama_taman: 'Taman Wisata Mekarsari',
      nama_pelaksana: 'Petra Jaya',
      luas_taman: '2000 m2',
      kecamatan: 'Cileungsi',
      kelurahan: 'Mekarsari',
      RT: 34,
      RW: 42,
    },
    {
      id: 3,
      nama_taman: 'Taman Safari Indonesia',
      nama_pelaksana: 'Adhi Karya',
      luas_taman: '2000 m2',
      kecamatan: 'Cisarua',
      kelurahan: 'Cibeureum',
      RT: 33,
      RW: 42,
    },
    {
      id: 4,
      nama_taman: 'Taman Sempur',
      nama_pelaksana: 'Wijaya Art',
      luas_taman: '200 m2',
      kecamatan: 'Bogor Tengah',
      kelurahan: 'Sempor',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_taman: 'Taman Cibinong Situ Plaza',
      nama_pelaksana: 'Wijaya Kusuma',
      luas_taman: '800 m2',
      kecamatan: 'Gelonding',
      kelurahan: 'Sukahati',
      RT: 9,
      RW: 4,
    },
    {
      id: 6,
      nama_taman: 'Mount Pancar',
      nama_pelaksana: 'Wijaya Kusuma',
      luas_taman: '900 m2',
      kecamatan: 'Babakan',
      kelurahan: 'Karang Tengah',
      RT: 23,
      RW: 41,
    },
    {
      id: 7,
      nama_taman: 'Wisata Taman Klasik Bogor',
      nama_pelaksana: 'Mahakarya Porperty',
      luas_taman: '1000 m2',
      kecamatan: 'Gunung Sindur',
      kelurahan: 'Sukaraja',
      RT: 1,
      RW: 3,
    },
    {
      id: 8,
      nama_taman: 'Wall Climbing Pemda Kab.bogor',
      nama_pelaksana: 'Wijaya Kusuma',
      luas_taman: '100 m2',
      kecamatan: 'Bojong Gede',
      kelurahan: 'Tonjong',
      RT: 3,
      RW: 4,
    },
    {
      id: 9,
      nama_taman: 'Taman Pelangi Kotawisata Cibubur',
      nama_pelaksana: 'Adhi Karya',
      luas_taman: '300 m2',
      kecamatan: 'Cibubur',
      kelurahan: 'Jonggol',
      RT: 33,
      RW: 42,
    },
    {
      id: 10,
      nama_taman: 'Cibinong Situ Plaza',
      nama_pelaksana: 'Mahakarya Pusaka',
      luas_taman: '3000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Sukahati',
      RT: 3,
      RW: 4,
    },
    {
      id: 11,
      nama_taman: 'Taman Corat Coret',
      nama_pelaksana: 'Muara Jaya Porperty',
      luas_taman: '200 m2',
      kecamatan: 'Bogor Utara',
      kelurahan: 'Tegal Gundil',
      RT: 43,
      RW: 7,
    },
    {
      id: 12,
      nama_taman: 'Taman Kopses Ciseeng (TKC)',
      nama_pelaksana: 'Adhi Karya',
      luas_taman: '300 m2',
      kecamatan: 'Ciseeng',
      kelurahan: 'Cibeuteung Muara',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }
}
