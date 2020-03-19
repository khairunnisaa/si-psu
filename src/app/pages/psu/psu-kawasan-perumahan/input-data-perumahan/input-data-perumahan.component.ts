import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'ngx-input-data-perumahan',
  templateUrl: './input-data-perumahan.component.html',
  styleUrls: ['./input-data-perumahan.component.scss'],
})
export class InputDataPerumahanComponent implements OnInit {

  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  source: LocalDataSource;
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/
  statusSerahTerima: boolean;
  statusBelumSerahTerima: boolean;
  statusTerlantar: boolean;

  public dataSaranaForm: FormGroup;
  public dataJalanSaluranForm: FormGroup;
  public dataTamanForm: FormGroup;
  public dataCCTVForm: FormGroup;

  constructor(
    private getKecamatanService: TableDataKecamatan,
    private formBuilderDataSarana: FormBuilder,
    private formBuilderDataJalanSaluran: FormBuilder,
    private formBuilderDataTaman: FormBuilder,
    private formBuilderDataCCTV: FormBuilder,
    ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
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
    this.statusSerahTerima = false;
    this.statusBelumSerahTerima = false;
    this.statusTerlantar = false;
    this.disableKelurahan = true;
    this.dataSaranaForm = this.formBuilderDataSarana.group({
      dataSarana: this.formBuilderDataSarana.array([this.createDataSaranaFormGroup()]),
    });
    this.dataJalanSaluranForm = this.formBuilderDataJalanSaluran.group({
      dataJalanSaluran: this.formBuilderDataJalanSaluran.array([this.createDataJalanSaluranFormGroup()]),
    });
    this.dataTamanForm = this.formBuilderDataTaman.group({
      dataTaman: this.formBuilderDataTaman.array([this.createDataTamanFormGroup()]),
    });
    this.dataCCTVForm = this.formBuilderDataCCTV.group({
      dataCCTV: this.formBuilderDataCCTV.array([this.createDataCCTVFormGroup()]),
    });
  }
  /**
   * Add Data......................................
   * */
  public addDataSarana() {
    const dataSarana = this.dataSaranaForm.get('dataSarana') as FormArray;
    dataSarana.push(this.createDataSaranaFormGroup())
  }

  public addDataJalanSaluran() {
    const dataJalanSaluran = this.dataJalanSaluranForm.get('dataJalanSaluran') as FormArray;
    dataJalanSaluran.push(this.createDataJalanSaluranFormGroup())
  }

  public addDataTaman() {
    const dataTaman = this.dataTamanForm.get('dataTaman') as FormArray;
    dataTaman.push(this.createDataTamanFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }
  /**
   * Remove Data......................................
   * */
  public removeDataSarana(j: number) {
    const dataSarana = this.dataSaranaForm.get('dataSarana') as FormArray;
    if (dataSarana.length > 1) {
      dataSarana.removeAt(j)
    } else {
      dataSarana.reset()
    }
  }

  public removeDataJalanSaluran(k: number) {
    const dataJalanSaluran = this.dataJalanSaluranForm.get('dataJalanSaluran') as FormArray;
    if (dataJalanSaluran.length > 1) {
      dataJalanSaluran.removeAt(k)
    } else {
      dataJalanSaluran.reset()
    }
  }

  public removeDataTaman(n: number) {
    const dataTaman = this.dataTamanForm.get('dataTaman') as FormArray;
    if (dataTaman.length > 1) {
      dataTaman.removeAt(n)
    } else {
      dataTaman.reset()
    }
  }

  public removeDataCCTV(m: number) {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(m)
    } else {
      dataCCTV.reset()
    }
  }
  /**
   * Create Data......................................
   * */

  private createDataSaranaFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createDataJalanSaluranFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createDataTamanFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  onSelectOption(status) {
    console.log("onselect", status);
    if (status === "Sudah Serah Terima") {
      this.statusSerahTerima = true;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = false;
    } else if (status === "Belum Serah Terima") {
      this.statusBelumSerahTerima = true;
      this.statusTerlantar = false;
      this.statusSerahTerima = false;
    } else if (status === "Terlantar") {
      this.statusSerahTerima =  false;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = true;
    }
  }
}
