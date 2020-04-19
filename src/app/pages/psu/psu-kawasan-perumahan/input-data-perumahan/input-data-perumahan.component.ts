import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TableDataKecamatan} from '../../../../@core/data/kecamatan';
import {LocalDataSource} from 'ng2-smart-table';
import {TableDataPerumahan} from '../../../../@core/data/perumahan';

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
  submitted: boolean;
  // koordinat
  koordinatSaranas: any;
  koordinatJalanSalurans: any;
  koordinatTamans: any;
  // urls: any[] = [];
  images: [];

  constructor(
    private getKecamatanService: TableDataKecamatan,
    private fb: FormBuilder,
    private service: TableDataPerumahan,
    ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
    this.submitted = false;
    this.formPerumahan = new FormGroup({
      formDataPerumahan : this.fb.group({
        nama_perumahan : ['', Validators.required],
        nama_pengembang : ['', Validators.required],
        luas_perumahan : ['', Validators.required],
        jumlah_rumah : ['', Validators.required],
        kecamatan : new FormControl(),
        kelurahan : ['', Validators.required],
        RT : ['', Validators.required],
        RW : ['', Validators.required],
        status : ['', Validators.required],
        tgl_serah_terima : ['', Validators.required],
        jumlah_psu: ['', Validators.required],
        no_bast : ['', Validators.required],
        sph : ['', Validators.required],
        keterangan : ['', Validators.required],
        fotos: this.fb.array([]),
        saranas: this.fb.array([this.createDataSaranaFormGroup()]),
        jalansalurans: this.fb.array([this.createDataJalanSaluranFormGroup()]),
        tamans: this.fb.array([this.createDataTamanFormGroup()]),
        dataCCTV: this.fb.array([this.createDataCCTVFormGroup()]),
        koordinats: this.fb.array([this.createKoordinat()]),

      }),
    });
    // =========================== kordinat saranas ======================================
    for (let k = 0; k < this.formPerumahan.controls.formDataPerumahan['controls']['saranas']
        ['controls'].length; k++) {
      this.koordinatSaranas = this.formPerumahan.controls.formDataPerumahan['controls']['saranas']
          ['controls'][k]['controls']['koordinat']['controls'];
    }
    // ================================ kordinat jalan saluran ==================================
    for (let l = 0; l < this.formPerumahan.controls.formDataPerumahan['controls']['jalansalurans']
        ['controls'].length; l++) {
      this.koordinatJalanSalurans =
          this.formPerumahan.controls.formDataPerumahan
              ['controls']['jalansalurans']['controls'][l]['controls']['koordinatjalansalurans']['controls']
    }
    // ================================ kordinat taman ==================================
    for (let l = 0; l < this.formPerumahan.controls.formDataPerumahan['controls']['tamans']
        ['controls'].length; l++) {
      this.koordinatTamans =
          this.formPerumahan.controls.formDataPerumahan
              ['controls']['tamans']['controls'][l]['controls']['koordinattamans']['controls']
    }
  }
  get saranas() {
    for (let sarana = 0; sarana <
    this.formPerumahan.controls.formDataPerumahan['controls']['saranas']['controls'].length; sarana++ ) {
      console.log("get" +
          " foto ",
          this.formPerumahan.controls.formDataPerumahan['controls']['saranas']['controls'][sarana]['controls']);
    }
    return null;
  }

  get f() {
    return this.formPerumahan.controls.formDataPerumahan['controls'];
  }

  changeKecamatan(kecamatan) {
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
  }

  changeKelurahan(kelurahan) {
    console.log("kelurahan ini", kelurahan)
  }

  inputDataPerumahans() {
    console.log("form value perumahan", this.formPerumahan.value);
    this.service.postData(this.formPerumahan.value.formDataPerumahan).then(res => {
      if (res.status === 'OK') {
        this.submitted = true;
      }
    });
    const formData = new FormData();
    for (const img of this.images) {
      formData.append('files', img);
    }
    console.log("form data", formData);
    this.service.postImage(formData)
  }
  ngOnInit() {
    this.statusSerahTerima = false;
    this.statusBelumSerahTerima = false;
    this.statusTerlantar = false;
    this.disableKelurahan = true;
  }
  /**
   * Add Data......................................
   * */

  public addDataSarana() {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('saranas') as FormArray;
    dataSarana.push(this.createDataSaranaFormGroup())
  }

  public addDataJalanSaluran() {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('jalansalurans') as FormArray;
    dataJalanSaluran.push(this.createDataJalanSaluranFormGroup())
  }

  public addDataTaman() {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('tamans') as FormArray;
    dataTaman.push(this.createDataTamanFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.formPerumahan.controls.formDataPerumahan.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }

  public addFotos(img) {
    const fotos = this.formPerumahan.controls.formDataPerumahan.get('fotos') as FormArray;
    // fotos.push(img);
    fotos.push(this.createImageGroup(img))
  }

  public addDataKoordinatPerumahan() {
    const koordinatPerumahan = this.formPerumahan.controls.formDataPerumahan.get('koordinats') as FormArray;
    koordinatPerumahan.push(this.createKoordinat())
  }

  public addDataKoordinatSarana() {
    const koordinatSarana = this.formPerumahan.controls.formDataPerumahan.get('saranas')['controls'];
    for (let i = 0; i < koordinatSarana.length; i++) {
      const kordinatsaranas = this.formPerumahan.controls.formDataPerumahan.get('saranas')['controls'][i].get('koordinat') as FormArray;
      kordinatsaranas.push(this.createKoordinat())
    }
  }

  public addDataKoordinatJalanSaluran() {
    const koordinatjalansaluran = this.formPerumahan.controls.formDataPerumahan
    .get('jalansalurans')['controls'] as FormArray;
    for (let i = 0; i < koordinatjalansaluran.length; i++) {
      const koordinatjalansalurans = this.formPerumahan.controls.formDataPerumahan
      .get('jalansalurans')['controls'][i].get('koordinatjalansalurans') as FormArray;
      koordinatjalansalurans.push(this.createKoordinat())
    }
  }

  public addDataKoordinatTaman() {
    const koordinattaman = this.formPerumahan.controls.formDataPerumahan
    .get('tamans')['controls'] as FormArray;
    for (let i = 0; i < koordinattaman.length; i++) {
      const koordinattamans = this.formPerumahan.controls.formDataPerumahan
      .get('tamans')['controls'][i].get('koordinattamans') as FormArray;
      koordinattamans.push(this.createKoordinat())
    }
  }
  /**
   * Remove Data......................................
   * */

  public removeKoordinatPerumahan(u) {
    const koordinatPerumahan = this.formPerumahan.controls.formDataPerumahan.get('koordinats') as FormArray;
    console.log('kordinatrumah', koordinatPerumahan);
    if (koordinatPerumahan.length > 1) {
      koordinatPerumahan.removeAt(u)
    } else {
      koordinatPerumahan.reset()
    }
  }
  public removeKoordinatSarana(u) {
    const koordinatsarana = this.formPerumahan.controls.formDataPerumahan.get('saranas') as FormArray;
    for (let kor = 0; kor < koordinatsarana.controls.length; kor++) {
      if (koordinatsarana.controls[kor]['controls']['koordinat'].length > 1) {
        koordinatsarana.controls[kor]['controls']['koordinat'].removeAt(u)
      } else {
        koordinatsarana.controls[kor]['controls']['koordinat'].reset()
      }
    }
  }
  public removeKoordinatJalanSaluran(u) {
    const koordinatjalansaluran = this.formPerumahan.controls.formDataPerumahan.get('jalansalurans') as FormArray;
    for (let kor = 0; kor < koordinatjalansaluran.controls.length; kor++) {
      if (koordinatjalansaluran.controls[kor]['controls']['koordinatjalansalurans'].length > 1) {
        koordinatjalansaluran.controls[kor]['controls']['koordinatjalansalurans'].removeAt(u)
      } else {
        koordinatjalansaluran.controls[kor]['controls']['koordinatjalansalurans'].reset()
      }
    }
  }

  public removeKoordinatTaman(u) {
    const koordinattaman = this.formPerumahan.controls.formDataPerumahan.get('tamans') as FormArray;
    for (let kor = 0; kor < koordinattaman.controls.length; kor++) {
      if (koordinattaman.controls[kor]['controls']['koordinattamans'].length > 1) {
        koordinattaman.controls[kor]['controls']['koordinattamans'].removeAt(u)
      } else {
        koordinattaman.controls[kor]['controls']['koordinattamans'].reset()
      }
    }
  }

  public removeDataSarana(k: number) {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('saranas') as FormArray;
    if (dataSarana.length > 1) {
      dataSarana.removeAt(k)
    } else {
      dataSarana.reset()
    }
  }

  public removeDataJalanSaluran(k: number) {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('jalansalurans') as FormArray;
    if (dataJalanSaluran.length > 1) {
      dataJalanSaluran.removeAt(k)
    } else {
      dataJalanSaluran.reset()
    }
  }

  public removeDataTaman(n: number) {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('tamans') as FormArray;
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

  private createDataSaranaFormGroup(): FormGroup {
    return this.fb.group({
      nama_sarana: ['', Validators.required],
      luas_sarana: ['', Validators.required],
      foto_sarana: new FormControl(),
      kondisi_sarana: ['', Validators.required],
      koordinat: this.fb.array([this.createKoordinat()]),
    })
  }
  private createKoordinat(): FormGroup {
    return this.fb.group({
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
    })
  }

  private createDataJalanSaluranFormGroup(): FormGroup {
    return this.fb.group({
      nama_jalan_saluran: ['', Validators.required],
      luas_jalan_saluran: ['', Validators.required],
      foto_jalan_saluran: new FormControl(),
      kondisi: ['', Validators.required],
      koordinatjalansalurans: this.fb.array([this.createKoordinat()]),
    })
  }

  private createDataTamanFormGroup(): FormGroup {
    return this.fb.group({
      nama_taman: ['', Validators.required],
      luas_taman: ['', Validators.required],
      foto_taman: new FormControl(),
      kondisi: ['', Validators.required],
      koordinattamans: this.fb.array([this.createKoordinat()]),
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
      nama_foto: new FormControl(),
    })
  }

  onSelectOption(status) {
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

  onFileUpload(event: any) {
    // this.urls = [];
    if (event.target.files.length > 0) {
      this.images = event.target.files;
      console.log("images", this.images);
      for (const file of this.images) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              // this.urls.push(e.target.result);
              this.addFotos(e.target.result);
            };
        reader.readAsDataURL(file);
    }
    }
  }
}

