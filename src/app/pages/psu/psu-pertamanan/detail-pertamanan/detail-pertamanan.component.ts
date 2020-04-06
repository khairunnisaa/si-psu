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
      cctvs: [{
        id: '',
        nama_cctv: '',
        ip_cctv: '',
        video: '',
      }],
      hardscapes: [{
        id: '',
        nama_alat: '',
        jumlah: '',
        merk: '',
        tahun_perolehan: '',
        kondisi: '',
        keterangan: '',
      }],
      softscapes: [{
        id: '',
        nama_alat: '',
        jumlah: '',
        merk: '',
        tahun_perolehan: '',
        kondisi: '',
        keterangan: '',
      }],
      peralatanpemeliharans: [{
        id: '',
        nama_alat: '',
        jumlah: '',
        merk: '',
        tahun_diperoleh: '',
        kondisi: '',
        keterangan: '',
      }],
      fotos: [{
        id: '',
        nama_foto: '',
        path_foto: '',
      }],
      petugas: [{
        id: '',
        nama: '',
        umur: '',
        pendidikan_terakhir: '',
        tugas: '',
        keterangan: '',
      }],
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
