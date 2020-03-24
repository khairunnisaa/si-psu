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
      foto: '',
      petugas: '',
      sarana: '',
      jumlah_rumah: '',
      status: '',
      tgl_serah_terima: '',
      no_bast: '',
      sph: '',
      jalan_saluran: '',
      taman: '',
      koordinat_perumahan: {
        longitude: '',
        latitude: '',
      },
      cctv: '',
    },
  };
  constructor() {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log('State Perumahan', this.state)
  }
}
