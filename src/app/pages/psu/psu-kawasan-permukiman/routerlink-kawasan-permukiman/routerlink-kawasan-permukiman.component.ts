import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-routerlink-kawasan-permukiman',
  templateUrl: './routerlink-kawasan-permukiman.component.html',
  styleUrls: ['./routerlink-kawasan-permukiman.component.scss'],
})
export class RouterlinkKawasanPermukimanComponent implements OnInit {

  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  // onClick() {
  //   console.log('rowData === ', this.rowData);
  //   switch (this.rowData.no) {
  //     case 1:
  //       this.url = '../../pages/psu/psu-kawasan-permukiman/detail-data-permukiman';
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
