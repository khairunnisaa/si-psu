import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-detail-pertamanan',
  templateUrl: './detail-pertamanan.component.html',
  styleUrls: ['./detail-pertamanan.component.scss'],
})
export class DetailPertamananComponent implements OnInit {
  public state = {
    dataDetailPertamanan: {
      nama_taman: '',
      nama_pelaksana: '',
      luas_taman: '',
      tahun_dibangun: '',
      kecamatan: '',
      kelurahan: '',
      RT: '',
      RW: '',
      keterangan: '',
      CCTV: '',
      hardscape: '',
      softscape: '',
      peralatan_pemelihara: '',
      foto_taman: '',
      petugas: '',
    },
  };
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log("states uy", this.state);
    // history.state.data
  }
}
