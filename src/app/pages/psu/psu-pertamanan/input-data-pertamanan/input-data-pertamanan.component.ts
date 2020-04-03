import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { TableDataKecamatan } from "../../../../@core/data/kecamatan";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TableDataPertamanan} from "../../../../@core/data/pertamanan";

@Component({
  selector: 'ngx-input-data-pertamanan',
  templateUrl: './input-data-pertamanan.component.html',
  styleUrls: ['./input-data-pertamanan.component.scss'],
})
export class InputDataPertamananComponent implements OnInit {
  public formPertamanan: FormGroup;
  source: LocalDataSource;
  kecamatan: string[];
  kelurahan: string[];
  disableKelurahan: boolean;
  submitted = false;

  constructor(
      private fb: FormBuilder,
      private service: TableDataPertamanan,
      private getKecamatanService: TableDataKecamatan) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;

    this.formPertamanan = new FormGroup({
      formDataPertamanan: this.fb.group({
        nama_taman: ['', Validators.required],
        nama_pelaksana: ['', Validators.required],
        luas_taman: ['', Validators.required],
        keterangan: ['', Validators.required],
        kecamatan: new FormControl(),
        kelurahan: new FormControl(),
        RT: ['', Validators.required],
        RW: ['', Validators.required],
        tahun_dibangun: ['', Validators.required],
        petugas: this.fb.array([this.createDataPetugasFormGroup()]),
        fotos: this.fb.array([this.createImageGroup('')]),
        softscapes: this.fb.array([this.createDataSoftscapeFormGroup()]),
        hardscapes: this.fb.array([this.createDataHardscapeFormGroup()]),
        cctvs: this.fb.array([this.createDataCCTVFormGroup()]),
        peralatanpemeliharans: this.fb.array([this.createDataPeralatanPemeliharaFormGroup()]),
        koordinats: this.fb.array([this.createKoordinatTamanFormGroup()]),

      }),
    })
  }

  get f() {
    return this.formPertamanan.controls.formDataPertamanan['controls'];
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
    this.disableKelurahan = true;
    /**
     * Validasi Form Pertamanan .........................................................
     */
  }

  disableTombolTambah($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
  }

  public addDataPetugas() {
    const addDataPetugas = this.formPertamanan.controls.formDataPertamanan.get('petugas') as FormArray;
    addDataPetugas.push(this.createDataPetugasFormGroup())
  }

  public addDataFotoTaman(img) {
    const dataFotoTaman = this.formPertamanan.controls.formDataPertamanan.get('fotos') as FormArray;
    dataFotoTaman.push(this.createImageGroup(img))
  }

  public addDataPeralatan() {
    const dataPeralatan = this.formPertamanan.controls.formDataPertamanan.get('peralatanpemeliharans') as FormArray;
    dataPeralatan.push(this.createDataPeralatanPemeliharaFormGroup())
  }

  public addDataSoftscape() {
    const dataPeralatan = this.formPertamanan.controls.formDataPertamanan.get('softscapes') as FormArray;
    dataPeralatan.push(this.createDataSoftscapeFormGroup())
  }

  public addDataHardscape() {
    const dataHardscape = this.formPertamanan.controls.formDataPertamanan.get('hardscapes') as FormArray;
    dataHardscape.push(this.createDataHardscapeFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.formPertamanan.controls.formDataPertamanan.get('cctvs') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }

  public addDataKoordinatTaman() {
    const addDatakoordinats = this.formPertamanan.controls.formDataPertamanan.get('koordinats') as FormArray;
    addDatakoordinats.push(this.createKoordinatTamanFormGroup())
  }

  public removeDataPetugas(i: number) {
    const removeDataPetugas = this.formPertamanan.controls.formDataPertamanan.get('petugas') as FormArray;
    if (removeDataPetugas.length > 1) {
      removeDataPetugas.removeAt(i)
    } else {
      removeDataPetugas.reset()
    }
  }

  public removeDataFotoTaman(e: number) {
    const dataFotoTaman = this.formPertamanan.controls.formDataPertamanan.get('fotos') as FormArray;
    if (dataFotoTaman.length > 1) {
      dataFotoTaman.removeAt(e)
    } else {
      dataFotoTaman.reset()
    }
  }

  public removeDataPeralatan(k: number) {
    const dataPeralatan = this.formPertamanan.controls.formDataPertamanan.get('peralatanpemeliharans') as FormArray;
    if (dataPeralatan.length > 1) {
      dataPeralatan.removeAt(k)
    } else {
      dataPeralatan.reset()
    }
  }

  public removeDataSoftscape(s: number) {
    const dataSoftscape = this.formPertamanan.controls.formDataPertamanan.get('softscapes') as FormArray;
    if (dataSoftscape.length > 1) {
      dataSoftscape.removeAt(s)
    } else {
      dataSoftscape.reset()
    }
  }

  //
  public removeDataHardscape(h: number) {
    const dataHardscape = this.formPertamanan.controls.formDataPertamanan.get('hardscapes') as FormArray;
    if (dataHardscape.length > 1) {
      dataHardscape.removeAt(h)
    } else {
      dataHardscape.reset()
    }
  }

  public removeDataCCTV(p: number) {
    const dataCCTV = this.formPertamanan.controls.formDataPertamanan.get('cctvs') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(p)
    } else {
      dataCCTV.reset()
    }
  }

  public removeDataKoordinat(u: number) {
    const removeDataKoordinat = this.formPertamanan.controls.formDataPertamanan.get('koordinats') as FormArray;
    if (removeDataKoordinat.length > 1) {
      removeDataKoordinat.removeAt(u)
    } else {
      removeDataKoordinat.reset()
    }
  }

  private createDataPetugasFormGroup() {
    return this.fb.group({
      nama:  ['', Validators.required],
      umur:  ['', Validators.required],
      pendidikan_terakhir:  ['', Validators.required],
      tugas:  ['', Validators.required],
      keterangan:  ['', Validators.required],
    })
  }

  private createDataSoftscapeFormGroup() {
    return this.fb.group({
      nama_alat: ['', Validators.required],
      jumlah: ['', Validators.required],
      merk: ['', Validators.required],
      kondisi: ['', Validators.required],
      tahun_perolehan: ['', Validators.required],
      keterangan: ['', Validators.required],
    })
  }

  private createDataHardscapeFormGroup() {
    return this.fb.group({
      nama_alat: ['', Validators.required],
      jumlah: ['', Validators.required],
      merk: ['', Validators.required],
      kondisi: ['', Validators.required],
      tahun_perolehan: ['', Validators.required],
      keterangan: ['', Validators.required],
    })
  }

  private createDataPeralatanPemeliharaFormGroup() {
    return this.fb.group({
      nama_alat: ['', Validators.required],
      jumlah: ['', Validators.required],
      merk: ['', Validators.required],
      kondisi: ['', Validators.required],
      tahun_diperoleh: ['', Validators.required],
      keterangan: ['', Validators.required],
    })
  }

  private createKoordinatTamanFormGroup(): FormGroup {
    return this.fb.group({
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return this.fb.group({
      nama_cctv: ['', Validators.required],
      ip_cctv: ['', Validators.required],
      video: ['', Validators.required],
    })
  }

  private createImageGroup(img): FormGroup {
    return this.fb.group({
      path_foto: img,
      nama_foto: ['', Validators.required],
    })
  }

  inputDataPertamanans() {
    console.log("form value perumahan", this.formPertamanan.value.formDataPertamanan);
    // this.service.postData(this.formPertamanan.value.formDataPertamanan);
    this.submitted = true;

    // stop here if form is invalid
    if (this.formPertamanan.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formPertamanan.value, null, 4));
  }
}
