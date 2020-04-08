import {Injectable} from '@angular/core';
import {TableDataPertamanan} from '../data/pertamanan';
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://localhost:7777/pertamanans';
// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class PertamananService extends TableDataPertamanan {

  constructor(private http: HttpClient) {
    super();
  }

  async getData() {
    const data = await this.http.get(baseUrl).toPromise();
    // console.log("Data: " + JSON.stringify(data['data']));
    return data['data'];
  }


  async postData(pertamanan) {
    const pertamananData = {
      nama_taman: pertamanan.nama_taman,
      nama_pelaksana: pertamanan.nama_pelaksana,
      luas_taman: pertamanan.luas_taman,
      keterangan: pertamanan.keterangan,
      kecamatan: pertamanan.kecamatan,
      kelurahan: pertamanan.kelurahan,
      RT: pertamanan.RT,
      RW : pertamanan.RW,
      tahun_dibangun: pertamanan.tahun_dibangun,
      petugas: pertamanan.petugas,
      fotos: pertamanan.fotos,
      softscapes: pertamanan.softscapes,
      hardscapes : pertamanan.hardscapes,
      cctvs: pertamanan.cctvs,
      peralatanpemeliharans: pertamanan.peralatanpemeliharans,
      koordinats: pertamanan.koordinats,
    };
    // console.log("Pertamanan data to post ", pertamananData);
    return await this.http.post(baseUrl, pertamananData).toPromise();
  }
}
