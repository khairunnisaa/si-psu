import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-psu-bar-pertamanan',
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
export class RekapitulasiBarPertamananComponent implements OnInit {
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
  xAxisLabel = 'Seluruh Taman';
  showYAxisLabel = true;
  yAxisLabel = 'Jumlah';
  barPadding = 60;

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
