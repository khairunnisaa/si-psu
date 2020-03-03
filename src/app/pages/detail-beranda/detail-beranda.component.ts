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

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }
}
