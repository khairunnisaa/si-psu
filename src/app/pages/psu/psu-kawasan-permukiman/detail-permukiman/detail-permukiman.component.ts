import {Component, Input, OnInit} from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
  selector: 'ngx-detail-permukiman',
  templateUrl: './detail-permukiman.component.html',
  styleUrls: ['./detail-permukiman.component.scss'],
})
export class DetailPermukimanComponent implements OnInit, ViewCell {

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
        this.url = '../../pages/beranda';
        break;
      case 2:
        this.url = 'Monday';
        break;
      case 3:
        this.url = 'Tuesday';
        break;
    }
  }
}
