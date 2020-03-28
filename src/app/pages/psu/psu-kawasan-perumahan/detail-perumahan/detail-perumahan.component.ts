import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'ngx-detail-perumahan',
  templateUrl: './detail-perumahan.component.html',
  styleUrls: ['./detail-perumahan.component.scss'],
})
export class DetailPerumahanComponent implements OnInit {

  public state = {
    dataPerumahan: {
      id: '',
      nama_perumahan: '',
      nama_pengembang: '',
      luas_perumahan: '',
      jumlah_perumahan: '',
      jumlah_foto: '',
      kecamatan: '',
      kelurahan: '',
      RT: '',
      RW: '',
      keterangan: '',
      CCTV: '',
      hardscape: '',
      softscape: '',
      peralatan_pemelihara: '',
      fotos: [{
        id: '',
        nama_foto: '',
        path_foto: '',
      }],
      petugas: '',
      saranas: [{
        id: '',
        nama_sarana: '',
        luas_sarana: '',
        foto_sarana: '',
        kondisi_sarana: '',
        koordinat : [{
          longitude: '',
          latitude: '',
        }],
      }],
      jumlah_rumah: '',
      status: '',
      tgl_serah_terima: '',
      no_bast: '',
      sph: '',
      jalansalurans: [{
        id: '',
        nama_jalan_saluran: '',
        luas_jalan_saluran: '',
        foto_jalan_saluran: '',
        kondisi: '',
        koordinattamans: [{
          longitude: '',
          latitude: '',
        }],
      }],
      tamans: [{
        id: '',
        nama_taman: '',
        luas_taman: '',
        foto_taman: '',
        kondisi: '',
        koordinat: [{
          longitude: '',
          latitude: '',
        }],
      }],
      koordinat_perumahan: {
        longitude: '',
        latitude: '',
      },
      cctvs: [{
        id: '',
        nama_cctv: '',
        ip_cctv: '',
        video: '',
      }],
    },
  };
  constructor() {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log('State Perumahan', this.state)
  }
}
