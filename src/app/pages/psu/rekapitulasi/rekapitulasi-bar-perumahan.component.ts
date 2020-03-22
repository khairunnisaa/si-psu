import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-psu-bar-perumahan',
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
export class RekapitulasiBarPerumahanComponent implements OnInit {
  options: any = {};
  themeSubscription: any;
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

  constructor(private theme: NbThemeService, private router: Router) {
  }

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

  onSelect(event) {
    console.log(event);
    this.router.navigate(['/pages/psu-kawasan-perumahan/kelola-data-perumahan']);
  }
}
