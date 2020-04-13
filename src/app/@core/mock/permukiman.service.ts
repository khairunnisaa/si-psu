import {Injectable} from '@angular/core';
import {TableDataPermukiman} from '../data/permukiman';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'https://si-psu-api.herokuapp.com/permukimans';
@Injectable({
  providedIn: 'root',
})
export class PermukimanService extends TableDataPermukiman {

  constructor(private http: HttpClient) {
    super();
  }
  // emulating request to the server
  async getData() {
    const data = await this.http.get(baseUrl).toPromise();
    // console.log("Data: " + JSON.stringify(data['data']));
    return data['data'];
  }


  async postData(permukiman) {
    const permukimanData = {
      nama_tpu: permukiman.nama_tpu,
      luas_tpu: permukiman.luas_tpu,
      data_tampung_tpu: permukiman.daya_tampung_tpu,
      tahun_digunakan: permukiman.tahun_digunakan,
      kecamatan: permukiman.kecamatan,
      kelurahan: permukiman.kelurahan,
      RT: permukiman.RT,
      RW : permukiman.RW,
      keterangan: permukiman.keterangan,
      pengelolas: permukiman.pengelolas,
      fotos: permukiman.fotos,
      inventarisalats: permukiman.inventarisalats,
      status : permukiman.status,
      cctvs: permukiman.cctvs,
      koordinats: permukiman.koordinats,
    };
    console.log("perumahan data to post ", permukimanData);
    return await this.http.post(baseUrl, permukimanData).toPromise();
  }
}
