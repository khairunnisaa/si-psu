import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-input-data-perumahan',
  templateUrl: './input-data-perumahan.component.html',
  styleUrls: ['./input-data-perumahan.component.scss'],
})
export class InputDataPerumahanComponent implements OnInit {

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
    console.log('rowData input === ', this.rowData);
    switch (this.rowData.id) {
      case 1:
        this.url = '../../../pages/psu-kawasan-perumahan/detail-data-perumahan';
        break;
      case 2:
        this.url = '../../pages/psu/input-data-perumahan';
        break;
      case 3:
        this.url = '../../pages/psu/input-data-perumahan';
        break;
    }
  }
}
