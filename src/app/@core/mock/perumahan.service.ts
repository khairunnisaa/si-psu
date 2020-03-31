import {Injectable} from '@angular/core';
import {TableDataPerumahan} from '../data/perumahan';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const baseUrl = 'http://localhost:7777/perumahans';

@Injectable({
  providedIn: 'root',
})
export class PerumahanService extends TableDataPerumahan {
  datasJson = '';
  // data = [
  //   {
  //     id: 1,
  //     nama_perumahan: 'Grahapura Kemang 1',
  //     nama_pengembang: 'PT. Grahaputra Sentosa Permai',
  //     luas_perumahan: '1,200',
  //     jumlah_rumah: '300',
  //     kecamatan: 'Ciseeng',
  //     kelurahan: 'Kuripan',
  //     RT: 3,
  //     RW: 4,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '13/10/2019',
  //     no_bast: '660/2565.B/DCK/2003',
  //     sph: '712871831.819318939.1301',
  //     jumlah_psu: '5',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: 'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: 'assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     nama_perumahan: 'Parung Panjang Indah',
  //     nama_pengembang: 'PT. Gramex Tonza Permai',
  //     luas_perumahan: '1,830',
  //     jumlah_rumah: '400',
  //     kecamatan: 'Parung Panjang',
  //     kelurahan: 'Cikuda',
  //     RT: 2,
  //     RW: 5,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '2/12/2010',
  //     no_bast: '839/3738.B/DCK/2390',
  //     sph: '3762736872.2398209382038.23923',
  //     jumlah_psu: '10',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: 'assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: 'assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: 'assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //           'assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     nama_perumahan: 'Pesona Kemang indah',
  //     nama_pengembang: 'PT. Tonaza Tonang Kemang',
  //     luas_perumahan: '3.290',
  //     jumlah_rumah: '500',
  //     kecamatan: 'Sukamakmur',
  //     kelurahan: 'Sukaharja',
  //     RT: 4,
  //     RW: 2,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '3/2/2013',
  //     no_bast: '229/2839.B/DCK/2390',
  //     jumlah_psu: '29',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //         koordinat_perumahan: [
  //           {
  //             longitude: '-6.232363',
  //             latitude: '106.676766',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     nama_perumahan: 'Griya Pesona Kemang 2',
  //     nama_pengembang: 'PT. Kemang Indah',
  //     luas_perumahan: '2.870',
  //     jumlah_rumah: '290',
  //     kecamatan: 'Cibinong',
  //     kelurahan: 'Cirimekar',
  //     RT: 7,
  //     RW: 9,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '20/2/2019',
  //     no_bast: '220/2009.B/DCK/3939',
  //     sph: '263727362.23029398293.230929',
  //     jumlah_psu: '9',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     nama_perumahan: 'Bojong Indah Permai',
  //     nama_pengembang: 'PT. Property Jaya Manunggal',
  //     luas_perumahan: '1.990',
  //     jumlah_rumah: '290',
  //     kecamatan: 'Bojong Gede',
  //     kelurahan: 'Ragajaya',
  //     RT: 9,
  //     RW: 3,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '9/12/2009',
  //     no_bast: '211/2209.B/TGB/2000',
  //     jumlah_psu: '21',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     nama_perumahan: 'Permain Indah Kapuk',
  //     nama_pengembang: 'PT. Rizki Anak Soleh',
  //     luas_perumahan: '1.900',
  //     jumlah_rumah: '230',
  //     kecamatan: 'Cibinong',
  //     kelurahan: 'Tengah',
  //     RT: 1,
  //     RW: 2,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '29/10/2019',
  //     no_bast: '399/2992.B/THK/2029',
  //     sph: '727367273267.2382983923.239238',
  //     jumlah_psu: '21',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     nama_perumahan: 'Griya Asri Manunggal I',
  //     nama_pengembang: 'PT. Property Mangga Dua',
  //     luas_perumahan: '1.789',
  //     jumlah_rumah: '290',
  //     kecamatan: 'Jasinga',
  //     kelurahan: 'Sipak',
  //     RT: 11,
  //     RW: 12,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '29/12/2010',
  //     no_bast: '111/2229.B/THK/2200',
  //     jumlah_psu: '10',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //         koordinat_perumahan: [
  //           {
  //             longitude: '-6.232363',
  //             latitude: '106.676766',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     nama_perumahan: 'Griya Papan Tengah Asri Banget',
  //     nama_pengembang: 'PT. Anak Duafa',
  //     luas_perumahan: '1.656',
  //     jumlah_rumah: '190',
  //     kecamatan: 'Gunung Putri',
  //     kelurahan: 'Bojong Nangka',
  //     RT: 1,
  //     RW: 19,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '21/11/2016',
  //     no_bast: '199/3939.B/TGH/3838',
  //     sph: '2382983923.2382938923.32323',
  //     jumlah_psu: '11',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     nama_perumahan: 'Griya Asri Sipak',
  //     nama_pengembang: 'PT. Horizon Property',
  //     luas_perumahan: '1.770',
  //     jumlah_rumah: '290',
  //     kecamatan: 'Citeurup',
  //     kelurahan: 'Hambalang',
  //     RT: 4,
  //     RW: 15,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '2/1/2017',
  //     no_bast: '299/2929.B/ERT/2929',
  //     sph: '712871831.819318939.1301',
  //     jumlah_psu: '5',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     nama_perumahan: 'Perumahan Ageng Sari',
  //     nama_pengembang: 'PT. Rizki Anak Soleh',
  //     luas_perumahan: '1.688',
  //     jumlah_rumah: '400',
  //     kecamatan: 'Gunung Putri',
  //     kelurahan: 'Bojong Nangka',
  //     RT: 1,
  //     RW: 9,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '11/10/2000',
  //     no_bast: '119/3299.B/TGH/3291',
  //     sph: '712871831.819318939.1301',
  //     jumlah_psu: '11',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     nama_perumahan: 'Griya Kayangan',
  //     nama_pengembang: 'PT. Indah Permai',
  //     luas_perumahan: '1.345',
  //     jumlah_rumah: '100',
  //     kecamatan: 'Caringin',
  //     kelurahan: 'Cimande',
  //     RT: 19,
  //     RW: 2,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '12/12/2019',
  //     no_bast: '130/2999.B/TGH/3301',
  //     sph: '712871831.819318939.1301',
  //     jumlah_psu: '15',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     nama_perumahan: 'Perumahan Griya Asri II',
  //     nama_pengembang: 'PT. Rizki Anak Soleh',
  //     luas_perumahan: '1.688',
  //     jumlah_rumah: '400',
  //     kecamatan: 'Gunung Putri',
  //     kelurahan: 'Bojong Nangka',
  //     RT: 1,
  //     RW: 9,
  //     status: "Sudah Serah Terima",
  //     tgl_serah_terima: '11/10/2010',
  //     no_bast: '159/3033.B/TTY/3301',
  //     sph: '712871831.819318939.1301',
  //     jumlah_psu: '11',
  //     keterangan: 'Perumahan Indah dan Sejuk',
  //     foto: [
  //       {
  //         id: '1',
  //         nama_foto: 'Tampak Depan',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_foto: 'Tampak Belakang',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%202.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_foto: 'Tampak Samping',
  //         path_foto: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     sarana: [
  //       {
  //         id: '1',
  //         nama_sarana: 'Lapangan Bulutangkis',
  //         luas_sarana: '500',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.229293',
  //             latitude: '106.827622',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_sarana: 'Lapangan Bola Volly',
  //         luas_sarana: '300',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.583787',
  //             latitude: '106.775967',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_sarana: 'Lapangan Sepak Bola',
  //         luas_sarana: '700',
  //         foto_sarana: [
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //           '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //         ],
  //         kondisi_sarana: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //     ],
  //     jalan_saluran: [
  //       {
  //         id: '1',
  //         nama_jalan_saluran: 'JL. Pegangsaaan Timur Raya No.23',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.583606',
  //             latitude: '106.777426',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_jalan_saluran: 'JL. Agus Salam No.56',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.581144',
  //             latitude: '106.784938',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_jalan_saluran: 'JL. Mejid Timur Raya No.77',
  //         luas_jalan_saluran: '7',
  //         foto_jalan_saluran: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //     ],
  //     taman: [
  //       {
  //         id: '1',
  //         nama_taman: 'Taman Pergangsaan Timur',
  //         luas_taman: '7',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Baik',
  //         koordinat: [
  //           {
  //             longitude: '-6.579588',
  //             latitude: '106.785614',
  //           },
  //         ],
  //       },
  //       {
  //         id: '2',
  //         nama_taman: 'Taman Cinta Mamat',
  //         luas_taman: '700',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Ringan',
  //         koordinat: [
  //           {
  //             longitude: '-6.562526',
  //             latitude: '106.766382',
  //           },
  //         ],
  //       },
  //       {
  //         id: '3',
  //         nama_taman: 'Taman Singaparma Djadul',
  //         luas_taman: '100',
  //         foto_taman: [
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //           '../../../../../assets/images/PERUMAHAN/peruamahan%201.jpg',
  //         ],
  //         kondisi: 'Rusak Berat',
  //         koordinat: [
  //           {
  //             longitude: '-6.556397',
  //             latitude: '106.758833',
  //           },
  //         ],
  //       },
  //     ],
  //     cctv: [
  //       {
  //         id: '1',
  //         nama_cctv: 'Gerbang Utama',
  //         ip_cctv: '10.110.200.20',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '2',
  //         nama_cctv: 'Taman Cinta',
  //         ip_cctv: '10.110.200.19',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '3',
  //         nama_cctv: 'Posko Komando 1',
  //         ip_cctv: '10.110.200.18',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '4',
  //         nama_cctv: 'Depan Masjid',
  //         ip_cctv: '10.110.200.17',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //       {
  //         id: '5',
  //         nama_cctv: 'Pintu Belakang',
  //         ip_cctv: '10.110.200.16',
  //         video: '../../../../../assets/images/PERUMAHAN/perumahan%203.jpg',
  //       },
  //     ],
  //     koordinat_perumahan: [
  //       {
  //         longitude: '-6.232363',
  //         latitude: '106.676766',
  //       },
  //     ],
  //   },
  //
  //
  // ];
  constructor(private http: HttpClient) {
    super();
  }
  // getData() {
  //   console.log('data perumahan', this.http.get(baseUrl + '/perumahans'));
  //   return this.http.get(baseUrl + '/perumahans');
  //   // return this.data;
  //
  // }

  // emulating request to the server
  async getData() {
    const data = await this.http.get(baseUrl).toPromise();
    // console.log("Data: " + JSON.stringify(data['data']));
    return data['data'];
  }

  async postData(perumahan) {
    const perumahanData = {
      nama_perumahan: perumahan.nama_perumahan,
      nama_pengembang: perumahan.nama_pengembang,
      luas_perumahan: perumahan.luas_perumahan,
      jumlah_rumah: perumahan.jumlah_rumah,
      kecamatan: perumahan.kecamatan,
      kelurahan: perumahan.kelurahan,
      RT: perumahan.RT,
      RW : perumahan.RW,
      status: perumahan.status,
      tgl_serah_terima: perumahan.tgl_serah_terima,
      no_bast: perumahan.no_bast,
      sph: perumahan.sph,
      jumlah_psu : perumahan.jumlah_psu,
      keterangan: perumahan.keterangan,
      fotos: [perumahan.fotos],
      saranas : [perumahan.saranas],
      jalansalurans: [perumahan.jalansalurans],
      tamans: [perumahan.tamans],
      cctvs: [perumahan.cctvs],
      koordinats: [perumahan.koordinats],
    };
    console.log("perumahan data to post ", perumahanData);
    return await this.http.post(baseUrl, perumahanData).toPromise();
  }

  exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const dateFormat = this.formatDate();
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(data, fileName + '_data_' + dateFormat + EXCEL_EXTENSION);
  }

  formatDate() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return day + month + year;
  }

  importFileExcel(ev) {
    console.log("event", ev);
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, {type: 'binary'});
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        console.log("sheet name", name);
        initial['data'] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const data_excel = JSON.parse(JSON.stringify(jsonData));
      this.pushdata(data_excel);
    };
    reader.readAsBinaryString(file);
    return file;
  }

  pushdata(dataString) {
    const obj = dataString['data'];
    const objFinalArr = [];
    let objFinal = {};
    console.log("object", obj);
    obj.forEach(function (element) {
      console.log("object tiap", element);
      objFinal = element;
      objFinalArr.push(objFinal)
    });
  //   Array.prototype.push.apply(this.data, objFinalArr);
  //   console.log("dataku jadi", this.data)
  }
}

// export class Perumahan {
//       nama_perumahan: string
//       nama_pengembang: string;
//       luas_perumahan: string;
//       jumlah_rumah: string;
//       kecamatan: string;
//       kelurahan: string;
//       RT: string
//       RW: string
//       status: string
//       tgl_serah_terima: string
//       no_bast: string
//       sph: string
//       jumlah_psu: string
//       keterangan: string
//       fotos: Object;
//       saranas: Object;
//       jalansalurans: Object;
//       tamans: Object;
//       cctvs: Object;
//       koordinats: Object;
//
// }
