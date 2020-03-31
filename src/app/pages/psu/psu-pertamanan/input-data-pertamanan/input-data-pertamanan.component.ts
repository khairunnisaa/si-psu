import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { TableDataKecamatan } from "../../../../@core/data/kecamatan";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TableDataPerumahan} from "../../../../@core/data/perumahan";
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

  constructor(
    private fb: FormBuilder,
    private service: TableDataPertamanan,

    private getKecamatanService: TableDataKecamatan) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;

    this.formPertamanan = new FormGroup({
      formDataPertamanan : this.fb.group({
        nama_taman : new FormControl(),
        nama_pelaksana : new FormControl(),
        luas_taman : new FormControl(),
        keterangan : new FormControl(),
        kecamatan : new FormControl(),
        kelurahan : new FormControl(),
        RT : new FormControl(),
        RW : new FormControl(),
        tahun_dibangun : new FormControl(),
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
      nama: new FormControl(),
      umur: new FormControl(),
      pendidikan_terakhir: new FormControl(),
      tugas: new FormControl(),
      keterangan: new FormControl(),
    })
  }

  private createDataSoftscapeFormGroup() {
    return this.fb.group({
      nama_alat: new FormControl(),
      jumlah: new FormControl(),
      merk: new FormControl(),
      kondisi: new FormControl(),
      tahun_perolehan: new FormControl(),
      keterangan: new FormControl(),
    })
  }

  private createDataHardscapeFormGroup() {
    return this.fb.group({
      nama_alat: new FormControl(),
      jumlah: new FormControl(),
      merk: new FormControl(),
      kondisi: new FormControl(),
      tahun_perolehan: new FormControl(),
      keterangan: new FormControl(),
    })
  }

  private createDataPeralatanPemeliharaFormGroup() {
    return this.fb.group({
      nama_alat: new FormControl(),
      jumlah: new FormControl(),
      merk: new FormControl(),
      kondisi: new FormControl(),
      tahun_diperoleh: new FormControl(),
      keterangan: new FormControl(),
    })
  }
  private createKoordinatTamanFormGroup(): FormGroup {
    return this.fb.group({
      longitude: new FormControl(),
      latitude: new FormControl(),
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return this.fb.group({
      nama_cctv: new FormControl(),
      ip_cctv: new FormControl(),
      video: new FormControl(),
    })
  }

  private createImageGroup(img): FormGroup {
    return this.fb.group({
      path_foto: img,
      nama_foto: new FormControl(),
    })
  }

  inputDataPertamanans() {
    console.log("form value perumahan", this.formPertamanan.value.formDataPertamanan);
    // this.service.postData(this.formPertamanan.value.formDataPertamanan);
  }
}
