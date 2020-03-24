import {Injectable} from '@angular/core';
import {TableDataPermukiman} from '../data/permukiman';

@Injectable({
  providedIn: 'root',
})
export class PermukimanService extends TableDataPermukiman {

  data = [
    {
    id: 1,
    nama_tpu: 'TPU Kuburan Kecil Padurenan',
    luas_tpu: '200 m2',
    tahun_digunakan: 2010,
    daya_tampung_tpu: '400',
    kecamatan: 'Gunung Sindur',
    kelurahan: 'Padurenan',
    RT: 18,
    RW: 1,
    pengelola: [
      {
        id: '1',
        nama: 'Pangabudin',
        umur: 23,
        pendidikan: 'SMA',
        tugas: 'Pengawas Lapangan',
        keterangan: 'Pegawai Pemda KAB. Bogor',
      },
      {
        id: '2',
        nama: 'Suryadi Pangabudin',
        umur: 67,
        pendidikan: 'SD',
        tugas: 'Pemeliharan TPU',
        keterangan: 'Pegawai Honorer',
      },
      {
        id: '3',
        nama: 'Annisa Habudin',
        umur: 34,
        pendidikan: 'S1',
        tugas: 'Pengawas Koordinator Lapangan',
        keterangan: 'Pegawai Pemda KAB. Bogor',
      },
      {
        id: '4',
        nama: 'Pangabudin',
        umur: 23,
        pendidikan: 'SMA',
        tugas: 'Pengawas Lapangan',
        keterangan: 'Pegawai Pemda KAB. Bogor',
      },
      {
        id: '5',
        nama: 'Suryadi Ningrat',
        umur: 56,
        pendidikan: 'SMP',
        tugas: 'Pemelihara',
        keterangan: 'Pegawai Honorer',
      },
    ],
    foto_tpu: [
      {
        id: 1,
        nama_foto: 'Makan 1',
        part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

      },
      {
        id: 2,
        nama_foto: 'Makan 2',
        part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

      },
      {
        id: 3,
        nama_foto: 'Makan 3',
        part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
      },
    ],
    inventaris_alat: [
      {
        id: 1,
        nama_alat: 'Cangkul',
        jumlah: 13,
        keterangan: 'Dari Pemerintah Kab.Bogor',
      },
      {
        id: 2,
        nama_alat: 'Sabit',
        jumlah: 15,
        keterangan: 'Dari Pemerintah Kab.Bogor',
      }, {
        id: 3,
        nama_alat: 'Sampu Lidi',
        jumlah: 13,
        keterangan: 'Dari Pemerintah Kab.Bogor',
      }, {
        id: 4,
        nama_alat: 'Pemotong Rumput',
        jumlah: 7,
        keterangan: 'Dari Pemerintah Kab.Bogor',
      },
      {
        id: 5,
        nama_alat: 'Truk Sampah',
        jumlah: 2,
        keterangan: 'Dari Pemerintah Kab.Bogor',
      },
    ],
    status: [
      {
        operasional: 'Sudah Operasional',
        kondisi: 'Baik',
        keterangan: '-',
      },
    ],
    koordinat: [
      {
        longitude: '-6.230697',
        latitude: '106.697509',
      }],
    cctv: [
      {
        id: 1,
        nama_cctv: 'Camera 1',
        ip_cctv: '110.11.90.1',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 2,
        nama_cctv: 'Camera 2',
        ip_cctv: '110.11.90.2',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 3,
        nama_cctv: 'Camera 3',
        ip_cctv: '110.11.90.3',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 4,
        nama_cctv: 'Camera 4',
        ip_cctv: '110.11.90.4',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 5,
        nama_cctv: 'Camera 5',
        ip_cctv: '110.11.90.5',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 6,
        nama_cctv: 'Camera 6',
        ip_cctv: '110.11.90.6',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
      {
        id: 7,
        nama_cctv: 'Camera 7',
        ip_cctv: '110.11.90.7',
        video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
      },
    ],
    keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
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
      pengelola: [
        {
          id: '1',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '2',
          nama: 'Suryadi Pangabudin',
          umur: 67,
          pendidikan: 'SD',
          tugas: 'Pemeliharan TPU',
          keterangan: 'Pegawai Honorer',
        },
        {
          id: '3',
          nama: 'Annisa Habudin',
          umur: 34,
          pendidikan: 'S1',
          tugas: 'Pengawas Koordinator Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '4',
          nama: 'Pangabudin',
          umur: 23,
          pendidikan: 'SMA',
          tugas: 'Pengawas Lapangan',
          keterangan: 'Pegawai Pemda KAB. Bogor',
        },
        {
          id: '5',
          nama: 'Suryadi Ningrat',
          umur: 56,
          pendidikan: 'SMP',
          tugas: 'Pemelihara',
          keterangan: 'Pegawai Honorer',
        },
      ],
      foto_tpu: [
        {
          id: 1,
          nama_foto: 'Makan 1',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%202.jpg',

        },
        {
          id: 2,
          nama_foto: 'Makan 2',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',

        },
        {
          id: 3,
          nama_foto: 'Makan 3',
          part_foto: '../../../../../assets/images/TPU/TPU%20Padurenan%203.jpg',
        },
      ],
      inventaris_alat: [
        {
          id: 1,
          nama_alat: 'Cangkul',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 2,
          nama_alat: 'Sabit',
          jumlah: 15,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 3,
          nama_alat: 'Sampu Lidi',
          jumlah: 13,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        }, {
          id: 4,
          nama_alat: 'Pemotong Rumput',
          jumlah: 7,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
        {
          id: 5,
          nama_alat: 'Truk Sampah',
          jumlah: 2,
          keterangan: 'Dari Pemerintah Kab.Bogor',
        },
      ],
      status: [
        {
          operasional: 'Sudah Operasional',
          kondisi: 'Baik',
          keterangan: '-',
        },
      ],
      koordinat: [
        {
          longitude: '-6.230697',
          latitude: '106.697509',
        }],
      cctv: [
        {
          id: 1,
          nama_cctv: 'Camera 1',
          ip_cctv: '110.11.90.1',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 2,
          nama_cctv: 'Camera 2',
          ip_cctv: '110.11.90.2',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 3,
          nama_cctv: 'Camera 3',
          ip_cctv: '110.11.90.3',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 4,
          nama_cctv: 'Camera 4',
          ip_cctv: '110.11.90.4',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 5,
          nama_cctv: 'Camera 5',
          ip_cctv: '110.11.90.5',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 6,
          nama_cctv: 'Camera 6',
          ip_cctv: '110.11.90.6',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
        {
          id: 7,
          nama_cctv: 'Camera 7',
          ip_cctv: '110.11.90.7',
          video: '../../../../../assets/images/TPU/TPU%20Padurenan.jpg',
        },
      ],
      keterangan: 'TPU No.1',
    },
  ];

  getData() {
    return this.data;
  }
}
