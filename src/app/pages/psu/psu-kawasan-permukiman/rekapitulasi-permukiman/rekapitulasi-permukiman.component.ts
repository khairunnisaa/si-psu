import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-rekapitulasi-permukiman',
  templateUrl: './rekapitulasi-permukiman.component.html',
  styleUrls: ['./rekapitulasi-permukiman.component.scss'],
})
export class RekapitulasiPermukimanComponent implements OnInit {

  options: any = {};
  themeSubscription: any;
  single: any[];
  multi: any[];

  view: any[] = [900, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah';
  barPadding = 500;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C'],
  };
  source: LocalDataSource;

  constructor(private theme: NbThemeService, private router: Router) {
  }

  ngOnInit() {
    this.single = [
      {
        "name": "Sudah Operasional",
        "value": 894,
      },
      {
        "name": "Belum Operasional",
        "value": 500,
      },
    ]
  }

  onSelect(event) {
    console.log(event);
    this.router.navigate(['/pages/psu-kawasan-permukiman/kelola-data-permukiman']);
  }
}
