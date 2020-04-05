import {Injectable} from '@angular/core';
import {TableDataPerumahan} from '../data/perumahan';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const baseUrl = 'http://localhost:7777/perumahans';

@Injectable({
  providedIn: 'root',
})
export class PerumahanService extends TableDataPerumahan {
  datasJson = '';
  constructor(private http: HttpClient) {
    super();
  }

  // emulating request to the server
  async getData() {
    const data = await this.http.get(baseUrl).toPromise();
    // console.log("Data: " + JSON.stringify(data['data']));
    return data['data'];
  }

  async postData(perumahan) {
    const perumahanData = {
      nama_perumahan: perumahan.nama_perumahan,
      nama_pengembang: perumahan.nama_pengembang,
      luas_perumahan: perumahan.luas_perumahan,
      jumlah_rumah: perumahan.jumlah_rumah,
      kecamatan: perumahan.kecamatan,
      kelurahan: perumahan.kelurahan,
      RT: perumahan.RT,
      RW : perumahan.RW,
      status: perumahan.status,
      tgl_serah_terima: perumahan.tgl_serah_terima,
      no_bast: perumahan.no_bast,
      sph: perumahan.sph,
      jumlah_psu : perumahan.jumlah_psu,
      keterangan: perumahan.keterangan,
      fotos: perumahan.fotos,
      saranas : perumahan.saranas,
      jalansalurans: perumahan.jalansalurans,
      tamans: perumahan.tamans,
      cctvs: perumahan.dataCCTV,
      koordinats: perumahan.koordinats,
    };
    console.log("perumahan data to post ", perumahanData);
    return await this.http.post(baseUrl, perumahanData).toPromise();
  }

  exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    const dateFormat = this.formatDate();
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(data, fileName + '_data_' + dateFormat + EXCEL_EXTENSION);
  }

  formatDate() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return day + month + year;
  }

  importFileExcel(ev) {
    console.log("event", ev);
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, {type: 'binary'});
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        console.log("sheet name", name);
        initial['data'] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const data_excel = JSON.parse(JSON.stringify(jsonData));
      this.pushdata(data_excel);
    };
    reader.readAsBinaryString(file);
    return file;
  }

  pushdata(dataString) {
    const obj = dataString['data'];
    const objFinalArr = [];
    let objFinal = {};
    console.log("object", obj);
    obj.forEach(function (element) {
      console.log("object tiap", element);
      objFinal = element;
      objFinalArr.push(objFinal)
    });
  //   Array.prototype.push.apply(this.data, objFinalArr);
  //   console.log("dataku jadi", this.data)
  }
}

// export class Perumahan {
//       nama_perumahan: string
//       nama_pengembang: string;
//       luas_perumahan: string;
//       jumlah_rumah: string;
//       kecamatan: string;
//       kelurahan: string;
//       RT: string
//       RW: string
//       status: string
//       tgl_serah_terima: string
//       no_bast: string
//       sph: string
//       jumlah_psu: string
//       keterangan: string
//       fotos: Object;
//       saranas: Object;
//       jalansalurans: Object;
//       tamans: Object;
//       cctvs: Object;
//       koordinats: Object;
//
// }
