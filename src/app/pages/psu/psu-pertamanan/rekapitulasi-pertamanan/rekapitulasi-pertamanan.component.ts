import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-rekapitulasi-pertamanan',
  templateUrl: './rekapitulasi-pertamanan.component.html',
  styleUrls: ['./rekapitulasi-pertamanan.component.scss'],
})
export class RekapitulasiPertamananComponent implements OnInit {

  options: any = {};
  themeSubscription: any;
  single: any[];
  multi: any[];

  view: any[] = [800, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Seluruh Taman';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah';
  barPadding = 300;

  colorScheme = {
    domain: ['#0000FF', '#5AA454', '#AAAAAA'],
  };
  source: LocalDataSource;

  constructor(private theme: NbThemeService, private router: Router) {
  }

  ngOnInit() {
    this.single = [
      {
        "name": "Hardsape",
        "value": 894,
      },
      {
        "name": "Softscape",
        "value": 500,
      },
    ]
  }
  onSelect(event) {
    console.log(event);
    this.router.navigate(['/pages/psu-pertamanan/kelola-data-pertamanan']);
  }
}
