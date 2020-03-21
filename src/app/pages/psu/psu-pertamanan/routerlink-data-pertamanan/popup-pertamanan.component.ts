import {Component, Input, OnInit} from '@angular/core';
import {NbWindowRef} from '@nebular/theme';

@Component({
  selector: 'ngx-popup-pertamanan',
  templateUrl: './popup-pertamanan.component.html',
  styleUrls: ['./popup-pertamanan.component.scss'],
})
export class PopupPertamananComponent implements OnInit {
    @Input() nama_pelaksana: any;
    @Input() luas_taman: any;
    @Input() nama_taman: any;
    @Input() kecamatan: any;
    @Input() kelurahan: any;
    @Input() RT: any;
    @Input() RW: any;
    @Input() jumlah_petugas: any;
    @Input() keterangan: any;
    @Input() foto: any;
    detailPertamanan: Object;
    ngOnInit(): void {
        this.detailPertamanan = {
          nama_pelaksana: this.nama_pelaksana,
          luas_taman : this.luas_taman,
          dataDetailPertamanan : this.nama_taman,
        };
        console.log("detail pertamanan", this.detailPertamanan);
    }

  constructor(public windowRef: NbWindowRef) {
  }

  close(eve) {
    console.log("close popup pertamanan", eve.target);
    this.windowRef.close();
  }

}
