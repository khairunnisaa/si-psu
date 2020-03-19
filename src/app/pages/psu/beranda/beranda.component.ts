import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Location} from '../../maps/search-map/entity/Location';
import {SmartTableData} from "../../../@core/data/smart-table";
import {DetailBerandaComponent} from "../../detail-beranda/detail-beranda.component";

@Component({
  selector: 'ngx-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.scss'],
})
export class BerandaComponent implements OnInit {
  source: LocalDataSource;
  ngOnInit() {
  }
  settings = {
    actions: false,
    columns: {
      no: {
        title: 'No',
        type: 'number',
        filter : false,
      },
      namaSeksi: {
        name: 'namaSeksi',
        title: 'Nama Seksi ',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          console.log("row cell == ", row, cell);
          return cell;
      },
        renderComponent: DetailBerandaComponent,
      },
      jumlahAset: {
        title: 'Jumlah Aset',
        type: 'string',
        filter : false,
      },
    },
  };
  searchedLocation: Location = new Location();
  updateLocation(event: Location) {
    this.searchedLocation = new Location(event.latitude, event.longitude);
  }
  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source = new LocalDataSource(data);
    console.log("datasourcee", this.source);
  }
}
