import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalDataSource} from "ng2-smart-table";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-input-data-permukiman',
  templateUrl: './input-data-permukiman.component.html',
  styleUrls: ['./input-data-permukiman.component.scss'],
})
export class InputDataPermukimanComponent implements OnInit {
  public dataPengelolaForm: FormGroup;
  public dataFotoTPUForm: FormGroup;
  public dataInventarisForm: FormGroup;
  public dataCCTVForm: FormGroup;
  statusSudahOperasional: boolean;
  statusBelumOperasional: boolean;

  source: LocalDataSource;
  pendidikan = ['Tidak Ada Pendidikan', 'SD', 'SMP', 'SMK', 'SMA', 'Madrasah', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'];
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/

  constructor(
              private formBuilderDataPengelola: FormBuilder,
              private formBuilderDataFotoTPU: FormBuilder,
              private formBuilderDataInventaris: FormBuilder,
              private formBuilderDataCCTV: FormBuilder,
              private getKecamatanService: TableDataKecamatan,
  ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
  }

  ngOnInit() {
    this.dataPengelolaForm = this.formBuilderDataPengelola.group({
      dataPengelola: this.formBuilderDataPengelola.array([this.createDataPengelolaFormGroup()]),
    });
    this.dataFotoTPUForm = this.formBuilderDataFotoTPU.group({
      dataFotoTPU: this.formBuilderDataFotoTPU.array([this.createDataFotoTPUFormGroup()]),
    });
    this.dataInventarisForm = this.formBuilderDataInventaris.group({
      dataInventaris: this.formBuilderDataInventaris.array([this.createDataInventarisFormGroup()]),
    });
    this.dataCCTVForm = this.formBuilderDataCCTV.group({
      dataCCTV: this.formBuilderDataCCTV.array([this.createDataCCTVFormGroup()]),
    });
    this.disableKelurahan = true;
  }

  get formdataPengelola() {
    return <FormArray>this.dataPengelolaForm.get('dataPengelola');
  }
  get formdataFoto() {
    return <FormArray>this.dataFotoTPUForm.get('dataFotoTPU');
  }
  get formdataInventaris() {
    return <FormArray>this.dataInventarisForm.get('dataInventaris');
  }
  get formdataCCTV() {
    return <FormArray>this.dataCCTVForm.get('dataCCTV');
  }
  changeKecamatan(kecamatan) {
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
  }

  changeKelurahan(kelurahan) {
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan)
  }

  disableTombolTambah($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
  }

  public addDataPengelola() {
    const dataPengelola = this.dataPengelolaForm.get('dataPengelola') as FormArray;
    dataPengelola.push(this.createDataPengelolaFormGroup())
  }

  public addDataFotoTPU() {
    const dataFotoTPU = this.dataFotoTPUForm.get('dataFotoTPU') as FormArray;
    dataFotoTPU.push(this.createDataFotoTPUFormGroup())
  }

  public addDataInventaris() {
    const dataInventaris = this.dataInventarisForm.get('dataInventaris') as FormArray;
    dataInventaris.push(this.createDataInventarisFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }

  public removeDataPengelolah(j: number) {
    const dataPengelola = this.dataPengelolaForm.get('dataPengelola') as FormArray;
    if (dataPengelola.length > 1) {
      dataPengelola.removeAt(j)
    } else {
      dataPengelola.reset()
    }
  }

  public removeDataFotoTPU(k: number) {
    const dataFotoTPU = this.dataFotoTPUForm.get('dataFotoTPU') as FormArray;
    if (dataFotoTPU.length > 1) {
      dataFotoTPU.removeAt(k)
    } else {
      dataFotoTPU.reset()
    }
  }

  public removeDataInventaris(m: number) {
    const dataInventaris = this.dataInventarisForm.get('dataInventaris') as FormArray;
    if (dataInventaris.length > 1) {
      dataInventaris.removeAt(m)
    } else {
      dataInventaris.reset()
    }
  }

  public removeDataCCTV(p: number) {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(p)
    } else {
      dataCCTV.reset()
    }
  }

  private createDataPengelolaFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createDataFotoTPUFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createDataInventarisFormGroup(): FormGroup {
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

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl('', Validators.email),
      'emailLabel': new FormControl(''),
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Apakah Anda Yakin Ingin Menghapus?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSelectOption(status) {
    console.log("onselect", status);
    if (status === "Sudah Operasional") {
      this.statusSudahOperasional = true;
      this.statusBelumOperasional = false;
    } else if (status === "Belum Operasional") {
      this.statusSudahOperasional = false;
      this.statusBelumOperasional = true;
    }
  }
}
