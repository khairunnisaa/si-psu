import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Location} from '../../maps/search-map/entity/Location';
import {SmartTableData} from "../../../@core/data/smart-table";
import {DetailBerandaComponent} from "../../detail-beranda/detail-beranda.component";

@Component({
  selector: 'ngx-rekapitulasi',
  templateUrl: './rekapitulasi.component.html',
  styleUrls: ['./rekapitulasi.component.scss'],
})
export class RekapitulasiComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [400, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah';
  barPadding = 30;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  source: LocalDataSource;

  ngOnInit() {
    this.single = [
      {
        "name": "Sudah Serah Terima",
        "value": 894,
      },
      {
        "name": "Belum Serah Terima",
        "value": 500,
      },
      {
        "name": "Terlantar",
        "value": 720,
      },
    ]
  }

  settings = {
    actions: false,
    columns: {
      no: {
        title: 'No',
        type: 'number',
        filter: false,
      },
      namaSeksi: {
        name: 'namaSeksi',
        title: 'Nama Seksi ',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return cell;
        },
        renderComponent: DetailBerandaComponent,
      },
      jumlahAset: {
        title: 'Jumlah Aset',
        type: 'string',
        filter: false,
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
    Object.assign(this, this.single)
    console.log("datasourcee", this.source);
  }

  onSelect(event) {
    console.log(event);
  }
}
