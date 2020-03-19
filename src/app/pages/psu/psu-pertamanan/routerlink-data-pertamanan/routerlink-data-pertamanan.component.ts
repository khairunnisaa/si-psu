import {Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';
import {PopupPertamananComponent} from "./popup-pertamanan.component";


@Component({
  selector: 'ngx-routerlink-data-pertamanan',
  templateUrl: './routerlink-data-pertamanan.component.html',
  styleUrls: ['./routerlink-data-pertamanan.component.scss'],
})
export class RouterlinkDataPertamananComponent implements OnInit, ViewCell {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  constructor(private windowService: NbWindowService) {
  }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  openWindow(contentTemplate) {
    this.disabledEscTemplate,
    this.windowService.open(
      contentTemplate,
      {
        title: 'Pemda Park',
        context: {
          id: 1,
          nama_taman: 'Pemda Park',
          nama_pelaksana: 'Adhi Karya',
          luas_taman: '1000 m2',
          foto: '9',
          kecamatan: 'Cibinong',
          kelurahan: 'Tegar Beriman',
          RT: 13,
          RW: 4,
          jumlah_petugas:5,
          keterangan:'Taman yang bagus',
          hasBackdrop: false,
          closeOnEsc: false,
        },
      },
    );
  }

  close() {
    this.close();
  }

  openWindowForm() {
    this.windowService.open(PopupPertamananComponent, { title: `Window` });
  }

  openWindowWithoutBackdrop() {
    this.windowService.open(
      this.disabledEscTemplate,
      {
        title: 'Window without backdrop',
        hasBackdrop: false,
        closeOnEsc: false,
      },
    );
  }


  // onClick() {
  //   console.log('rowData === ', this.rowData);
  //   switch (this.rowData.no) {
  //     case 1:
  //       this.url = '../../pages/beranda';
  //       break;
  //     case 2:
  //       this.url = 'Monday';
  //       break;
  //     case 3:
  //       this.url = 'Tuesday';
  //       break;
  //   }
  // }
}
