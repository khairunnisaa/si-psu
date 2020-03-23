import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-psu-bar-permukiman',
  template: `<ngx-charts-bar-vertical
    [view]="view"
    [trimXAxisTicks]="false"
    [scheme]="colorScheme"
    [results]="single"
    [gradient]="gradient"
    [xAxis]="showXAxis"
    [yAxis]="showYAxis"
    [legend]="showLegend"
    [showXAxisLabel]="showXAxisLabel"
    [showYAxisLabel]="showYAxisLabel"
    [xAxisLabel]="xAxisLabel"
    [yAxisLabel]="yAxisLabel"
    [barPadding]="barPadding"
    (select)="onSelect($event)">
  </ngx-charts-bar-vertical>`,
})
export class RekapitulasiBarPermukimanComponent implements OnInit {
  options: any = {};
  themeSubscription: any;
  single: any[];
  multi: any[];

  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Status';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah';
  barPadding = 60;

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
