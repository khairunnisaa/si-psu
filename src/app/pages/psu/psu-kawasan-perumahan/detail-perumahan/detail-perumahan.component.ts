import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'ngx-detail-perumahan',
  templateUrl: './detail-perumahan.component.html',
  styleUrls: ['./detail-perumahan.component.scss'],
})
export class DetailPerumahanComponent implements OnInit {

  public state = {
    detailDataPerumahan: {
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
      dataPerumahan: '',
    },
  };
  constructor() {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log('State Perumahan', this.state)
  }
}
