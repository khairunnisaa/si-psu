import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { TableDataKecamatan } from "../../../../@core/data/kecamatan";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ngx-input-data-pertamanan',
  templateUrl: './input-data-pertamanan.component.html',
  styleUrls: ['./input-data-pertamanan.component.scss'],
})
export class InputDataPertamananComponent implements OnInit {

  public dataPetugasForm: FormGroup;
  public dataFotoTamanForm: FormGroup;
  public dataPeralatanForm: FormGroup;
  public dataSoftscapeForm: FormGroup;
  public dataHardscapeForm: FormGroup;
  public dataCCTVForm: FormGroup;

  source: LocalDataSource;
  kecamatan: string[];
  kelurahan: string[];
  disableKelurahan: boolean;
  disableRemoveDataPetugas: boolean[];

  constructor(
    private formBuilderDataPetugas: FormBuilder,
    // private formBuilderDataFotoTaman: FormBuilder,
    // private formBuilderDataPeralatan: FormBuilder,
    // private formBuilderDataSoftscape: FormBuilder,
    // private formBuilderDataHardscape: FormBuilder,
    // private formBuilderDataCCTV: FormBuilder,
    private getKecamatanService: TableDataKecamatan) {
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
    this.dataPetugasForm = this.formBuilderDataPetugas.group({
      dataPetugasku: this.formBuilderDataPetugas.array([this.createDataPetugasFormGroup()]),
    });
    // this.dataFotoTamanForm = this.formBuilderDataFotoTaman.group({
    //   dataFotoTaman: this.formBuilderDataFotoTaman.array([this.createDataFotoTamanFormGroup()]),
    // });
    // this.dataPeralatanForm = this.formBuilderDataPeralatan.group({
    //   dataPeralatan: this.formBuilderDataPeralatan.array([this.createDataPeralatanFormGroup()]),
    // });
    // this.dataSoftscapeForm = this.formBuilderDataSoftscape.group({
    //   dataSoftscape: this.formBuilderDataSoftscape.array([this.createDataSoftscapeFormGroup()]),
    // });
    // this.dataHardscapeForm = this.formBuilderDataHardscape.group({
    //   dataHardscape: this.formBuilderDataHardscape.array([this.createDataHardscapeFormGroup()]),
    // });
    // this.dataCCTVForm = this.formBuilderDataCCTV.group({
    //   dataCCTV1: this.formBuilderDataCCTV.array([this.createDataCCTVFormGroup()]),
    // });
    this.disableKelurahan = true;
    this.disableRemoveDataPetugas = [false];
  }
  disableTombolTambah($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
  }

  public addDataPetugas(i) {
    this.disableRemoveDataPetugas[i] = true;
    const addDataPetugas = this.dataPetugasForm.get('dataPetugasku') as FormArray;
    addDataPetugas.push(this.createDataPetugasFormGroup())

  }

  // public addDataFotoTaman() {
  //   const dataFotoTaman = this.dataFotoTamanForm.get('dataFotoTaman') as FormArray;
  //   dataFotoTaman.push(this.createDataFotoTamanFormGroup())
  // }
  //
  // public addDataPeralatan() {
  //   const dataPeralatan = this.dataPeralatanForm.get('dataPeralatan') as FormArray;
  //   dataPeralatan.push(this.createDataPeralatanFormGroup())
  // }
  //
  // public addDataSoftscape() {
  //   const dataPeralatan = this.dataSoftscapeForm.get('dataSoftscape') as FormArray;
  //   dataPeralatan.push(this.createDataSoftscapeFormGroup())
  // }
  //
  // public addDataHardscape() {
  //   const dataHardscape = this.dataHardscapeForm.get('dataHardscape') as FormArray;
  //   dataHardscape.push(this.createDataHardscapeFormGroup())
  // }
  //
  // public addDataCCTV() {
  //   const dataCCTV = this.dataCCTVForm.get('dataCCTV1') as FormArray;
  //   dataCCTV.push(this.createDataCCTVFormGroup())
  // }

  public removeDataPetugas(index: number, event) {
    // this.disableRemoveDataPetugas[index - 1] = false;
    this.disableRemoveDataPetugas[index] = false;
    const removeDataPetugas = this.dataPetugasForm.get('dataPetugasku') as FormArray;
    if (removeDataPetugas.length > 1) {
      removeDataPetugas.removeAt(index)
    } else {
      removeDataPetugas.reset()
    }
  }

  // public removeDataFotoTaman(k: number) {
  //   const dataFotoTaman = this.dataFotoTamanForm.get('dataFotoTaman') as FormArray;
  //   if (dataFotoTaman.length > 1) {
  //     dataFotoTaman.removeAt(k)
  //   } else {
  //     dataFotoTaman.reset()
  //   }
  // }
  //
  // public removeDataPeralatan(n: number) {
  //   const dataPeralatan = this.dataPeralatanForm.get('dataPeralatan') as FormArray;
  //   if (dataPeralatan.length > 1) {
  //     dataPeralatan.removeAt(n)
  //   } else {
  //     dataPeralatan.reset()
  //   }
  // }
  //
  // public removeDataSoftscape(m: number) {
  //   const dataSoftscape = this.dataSoftscapeForm.get('dataSoftscape') as FormArray;
  //   if (dataSoftscape.length > 1) {
  //     dataSoftscape.removeAt(m)
  //   } else {
  //     dataSoftscape.reset()
  //   }
  // }
  //
  // public removeDataHardscape(l: number) {
  //   const dataHardscape = this.dataHardscapeForm.get('dataHardscape') as FormArray;
  //   if (dataHardscape.length > 1) {
  //     dataHardscape.removeAt(l)
  //   } else {
  //     dataHardscape.reset()
  //   }
  // }
  //
  // public removeDataCCTV(p: number) {
  //   const dataCCTV = this.dataCCTVForm.get('dataCCTV1') as FormArray;
  //   if (dataCCTV.length > 1) {
  //     dataCCTV.removeAt(p)
  //   } else {
  //     dataCCTV.reset()
  //   }
  // }

  private createDataPetugasFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  // private createDataFotoTamanFormGroup(): FormGroup {
  //   return new FormGroup({
  //     'emailAddress': new FormControl(''),
  //     'emailLabel': new FormControl(''),
  //   })
  // }
  //
  // private createDataPeralatanFormGroup(): FormGroup {
  //   return new FormGroup({
  //     'emailAddress': new FormControl(''),
  //     'emailLabel': new FormControl(''),
  //   })
  // }
  //
  // private createDataSoftscapeFormGroup(): FormGroup {
  //   return new FormGroup({
  //     'emailAddress': new FormControl(''),
  //     'emailLabel': new FormControl(''),
  //   })
  // }
  //
  // private createDataHardscapeFormGroup(): FormGroup {
  //   return new FormGroup({
  //     'emailAddress': new FormControl(''),
  //     'emailLabel': new FormControl(''),
  //   })
  // }
  //
  // private createDataCCTVFormGroup(): FormGroup {
  //   return new FormGroup({
  //     'emailAddress12': new FormControl(''),
  //     'emailLabel12': new FormControl(''),
  //   })
  // }


}
