import {Component, Input, OnInit} from '@angular/core';
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-popup-data-perumahan',
  templateUrl: './popup-data-perumahan.component.html',
  styleUrls: ['./popup-data-perumahan.component.scss'],
})
export class PopupDataPerumahanComponent implements OnInit {
  @Input() nama_perumahan: any;
  @Input() nama_pengembang: any;
  @Input() luas_perumahan: any;
  @Input() jumlah_rumah: any;
  @Input() foto: any;
  @Input() kecamatan: any;
  @Input() kelurahan: any;
  @Input() RT: any;
  @Input() RW: any;
  @Input() status: any;
  @Input() tgl_serah_terima: any;
  @Input() no_bast: any;
  @Input() jumlah_psu: any;
  @Input() sph: any;
  @Input() keterangan: any;
  @Input() cctv: any;
  @Input() dataPerumahan: any;

  detailPerumahan: Object;

  ngOnInit(): void {
    this.detailPerumahan = {
      nama_perumahan: this.nama_perumahan,
      nama_pengembang: this.nama_pengembang,
      luas_perumahan: this.luas_perumahan,
      jumlah_rumah: this.jumlah_rumah,
      kecamatan: this.kecamatan,
      kelurahan: this.kelurahan,
      RT: this.RT,
      RW: this.RW,
      tgl_serah_terima: this.tgl_serah_terima,
      no_bast: this.no_bast,
      sph: this.sph,
      status: this.status,
      foto: this.foto,
      dataPerumahan : this.dataPerumahan,
    };
    console.log("detail perumahan", this.detailPerumahan);
  }

  constructor(public windowRef: NbWindowRef) { }
  close() {
    this.windowRef.close();
  }

}
