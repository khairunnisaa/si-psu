import {Component, Input, OnInit} from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-detail-perumahan',
  templateUrl: './detail-perumahan.component.html',
  styleUrls: ['./detail-perumahan.component.scss'],
})
export class DetailPerumahanComponent implements OnInit, ViewCell {
  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}
