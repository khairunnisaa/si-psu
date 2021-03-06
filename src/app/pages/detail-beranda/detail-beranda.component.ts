import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-detail-beranda',
  templateUrl: './detail-beranda.component.html',
  styleUrls: ['./detail-beranda.component.scss'],
})
export class DetailBerandaComponent implements ViewCell, OnInit {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  constructor() {
  }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick() {
    console.log('rowData === ', this.rowData);
    switch (this.rowData.no) {
      case 1:
        this.url = '/pages/psu-kawasan-perumahan/kelola-data-perumahan';
        break;
      case 2:
        this.url = '/pages/psu-kawasan-permukiman/kelola-data-permukiman';
        break;
      case 3:
        this.url = '/pages/psu-pertamanan/kelola-data-pertamanan';
        break;
    }
  }
}
