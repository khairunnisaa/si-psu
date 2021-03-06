import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {NbThemeService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-rekapitulasi-perumahan',
  templateUrl: './rekapitulasi-perumahan.component.html',
  styleUrls: ['./rekapitulasi-perumahan.component.scss'],
})
export class RekapitulasiPerumahanComponent implements OnInit {

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
  barPadding = 180;

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
