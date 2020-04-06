import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-detail-permukiman',
  templateUrl: './detail-permukiman.component.html',
  styleUrls: ['./detail-permukiman.component.scss'],
})
export class DetailPermukimanComponent implements OnInit {
  public state = {
    dataPermukiman: {
      id: '',
      nama_tpu: '',
      luas_tpu: '',
      data_tampung_tpu: '',
      tahun_digunakan: '',
      kecamatan: '',
      kelurahan: '',
      RT: '',
      RW: '',
      keterangan: '',
      pengelolas: [{
        id: '',
        nama: '',
        umur: '',
        pendidikan: '',
        tugas: '',
        keterangan: '',
      }],
      fotos: [{
        id: '',
        nama_foto: '',
        path_foto: '',
      }],
      inventarisalats: [{
        id: '',
        nama_alat: '',
        jumlah: '',
        keterangan: '',
      }],
      status: [{
        operasional: '',
        kondisi: '',
        keterangan: '',
      }],
      koordinats: [{
        id: '',
        longitude: '',
        latitude: '',
      }],
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
    console.log('State Permukiman', this.state.dataPermukiman.status)
  }
}
