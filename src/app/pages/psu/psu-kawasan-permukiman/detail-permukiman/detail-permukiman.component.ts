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
      daya_tampung_tpu: '',
      tahun_digunakan: '',
      kecamatan: '',
      kelurahan: '',
      RT: '',
      RW: '',
      keterangan: '',
      pengelola: '',
      inventaris_alat: '',
      status: '',
      koordinat_tpu: '',
      sarana: '',
      cctv: '',
    },
  };
  constructor() {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log('State Permukiman', this.state.dataPermukiman)
  }
}
