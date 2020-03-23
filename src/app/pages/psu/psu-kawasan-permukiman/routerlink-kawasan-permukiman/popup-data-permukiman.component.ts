import {Component, Input, OnInit} from '@angular/core';
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-popup-data-permukiman',
  templateUrl: './popup-data-permukiman.component.html',
  styleUrls: ['./popup-data-permukiman.component.scss'],
})
export class PopupDataPermukimanComponent  implements OnInit {
  @Input() nama_tpu: any;
  @Input() luas_tpu: any;
  @Input() foto: any;
  @Input() daya_tampung_tpu: any;
  @Input() kecamatan: any;
  @Input() kelurahan: any;
  @Input() RT: any;
  @Input() RW: any;
  @Input() status: any;
  @Input() kondisi: any;
  @Input() keterangan: any;
  @Input() dataPermukiman: any;
  detailPermukiman: Object;

  ngOnInit(): void {
    this.detailPermukiman = {
      nama_tpu: this.nama_tpu,
      luas_tpu: this.luas_tpu,
      daya_tampung_tpu: this.daya_tampung_tpu,
      foto: this.foto,
      kecamatan: this.kecamatan,
      kelurahan: this.kelurahan,
      RT: this.RT,
      RW: this.RW,
      status: this.status,
      keterangan: this.keterangan,
      dataPermukiman: this.dataPermukiman,
    };
    console.log("detail permukiman", this.dataPermukiman);
  }

  constructor(public windowRef: NbWindowRef) { }
  close() {
    this.windowRef.close();
  }

}

