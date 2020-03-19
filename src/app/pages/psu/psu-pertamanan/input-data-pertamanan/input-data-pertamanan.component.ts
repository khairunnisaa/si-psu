import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { TableDataKecamatan } from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-input-data-pertamanan',
  templateUrl: './input-data-pertamanan.component.html',
  styleUrls: ['./input-data-pertamanan.component.scss'],
})
export class InputDataPertamananComponent implements OnInit {

  source: LocalDataSource;
  kecamatan: string[];
  kelurahan: string[];
  disableKelurahan: boolean;

  constructor( private getKecamatanService: TableDataKecamatan) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true
  }

  changeKecamatan(kecamatan) {
    console.log("kecamatan --", kecamatan);
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
    console.log("kelurahan", this.kelurahan);
  }

  changeKelurahan(kelurahan) {
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan)
  }

  ngOnInit() {
  }

}
