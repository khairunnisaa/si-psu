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
  formPerumahan: FormGroup;

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
    private fb: FormBuilder,
    ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
    this.formPerumahan = new FormGroup({
      formDataPerumahan : this.fb.group({
        namaPerumahan : new FormControl(''),
        namaPengembang : new FormControl(''),
        luasPerumahan : new FormControl(''),
        kecamatan : new FormControl(''),
        kabupaten : new FormControl(''),
        rt : new FormControl(''),
        rw : new FormControl(''),
        status : new FormControl(''),
        tanggalSerahTerima : new FormControl(''),
        noBeritaAcaraSerahTerima : new FormControl(''),
        sph : new FormControl(''),
        dataSarana: this.fb.array([this.createDataSaranaFormGroup()]),
        dataJalanSaluran: this.fb.array([this.createDataJalanSaluranFormGroup()]),
        dataTamanForm: this.fb.array([this.createDataTamanFormGroup()]),
        dataCCTV: this.fb.array([this.createDataCCTVFormGroup()]),
      }),
    })

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

  inputPerumahans() {
    console.log("form value perumahan", this.formPerumahan.value);
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
    // this.formPerumahan = this.dataSaranaForm.get('dataSarana') as FormArray;
    const control = this.formPerumahan.controls
  }
  /**
   * Add Data......................................
   * */

  public addDataSarana() {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('dataSarana') as FormArray;
    dataSarana.push(this.createDataSaranaFormGroup())
  }

  public addDataJalanSaluran() {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('dataJalanSaluran') as FormArray;
    dataJalanSaluran.push(this.createDataJalanSaluranFormGroup())
  }

  public addDataTaman() {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('dataTamanForm') as FormArray;
    dataTaman.push(this.createDataTamanFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.formPerumahan.controls.formDataPerumahan.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }
  /**
   * Remove Data......................................
   * */
  public removeDataSarana(j: number) {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('dataSarana') as FormArray;
    if (dataSarana.length > 1) {
      dataSarana.removeAt(j)
    } else {
      dataSarana.reset()
    }
  }

  public removeDataJalanSaluran(k: number) {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('dataJalanSaluran') as FormArray;
    if (dataJalanSaluran.length > 1) {
      dataJalanSaluran.removeAt(k)
    } else {
      dataJalanSaluran.reset()
    }
  }

  public removeDataTaman(n: number) {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('dataTamanForm') as FormArray;
    if (dataTaman.length > 1) {
      dataTaman.removeAt(n)
    } else {
      dataTaman.reset()
    }
  }

  public removeDataCCTV(m: number) {
    const dataCCTV = this.formPerumahan.controls.formDataPerumahan.get('dataCCTV') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(m)
    } else {
      dataCCTV.reset()
    }
  }
  /**
   * Create Data......................................
   * */

  private createDataSaranaFormGroup() {
    return this.fb.group({
      'namaSaranaPSU': '',
      'luasSaranaPSU': '',
      'fotoSaranaPSU': '',
      'kondisiSaranaPSU': '',
      'koordinatPSU': '',
    })
  }

  private createDataJalanSaluranFormGroup(): FormGroup {
    return this.fb.group({
      'namajalanSaluran': [''],
      'luasJalanSaluran': [''],
      'fotoJalanSaluran': [''],
      'kondisiJalanSaluran': [''],
      'koordinatJalanSaluran': [''],
    })
  }

  private createDataTamanFormGroup(): FormGroup {
    return this.fb.group({
      'namaTaman': '',
      'luasTaman': '',
      'fotoTaman': '',
      'kondisiTaman': '',
      'koordinatTaman': '',
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return this.fb.group({
      'namaCCTVPerumahan': '',
      'ipCameraPerumahan': '',
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
