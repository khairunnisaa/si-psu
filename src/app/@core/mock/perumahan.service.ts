import { Injectable } from '@angular/core';
import { TableDataPerumahan } from '../data/perumahan';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root',
})
export class PerumahanService extends TableDataPerumahan {
  datasJson = '';
  data = [{
    id: 1,
    nama_perumahan: 'Bumi Citra Asri',
    nama_pengembang: 'Rizcon Hasanah',
    luas_perumahan: '10.000 m2',
    kecamatan: 'Cibinong',
    kelurahan: 'Tajur Halang',
    RT: 3,
    RW: 4,
    },
    {
      id: 2,
      nama_perumahan: 'Tajur Halang Indah',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1700 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
  },
    {
      id: 3,
      nama_perumahan: 'Perumahan Griya Asri Indah',
      nama_pengembang: 'Pondasi Nenek Mertua',
      luas_perumahan: '9000 m2',
      kecamatan: 'Citayam',
      kelurahan: 'Kemanggisan Timur',
      RT: 3,
      RW: 4,
    },
    {
      id: 4,
      nama_perumahan: 'Marban Cahaya Raya',
      nama_pengembang: 'Prima Jaya',
      luas_perumahan: '9000 m2',
      kecamatan: 'Bojong Gede',
      kelurahan: 'PGRI',
      RT: 7,
      RW: 1,
    },
    {
      id: 5,
      nama_perumahan: 'Bojong Indah Permai',
      nama_pengembang: 'Prima Jaya',
      luas_perumahan: '1890 m2',
      kecamatan: 'Citayam',
      kelurahan: 'Kinang Rejo',
      RT: 9,
      RW: 4,
    },
    {
      id: 6,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 7,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '3900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 8,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '2480 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 9,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '8000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 10,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 4,
    },
    {
      id: 11,
      nama_perumahan: 'Bumi Citra Asri',
      nama_pengembang: 'Rizcon Hasanah',
      luas_perumahan: '1900 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tajur Halang',
      RT: 3,
      RW: 17,
    },
    {
      id: 12,
      nama_perumahan: 'Kemanggisan Permai Indah',
      nama_pengembang: 'Propan Jaya',
      luas_perumahan: '9000 m2',
      kecamatan: 'Cibinong',
      kelurahan: 'Tonjong',
      RT: 10,
      RW: 20,
    },


  ];

  getData() {
    return this.data;
  }

  exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
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
      workBook = XLSX.read(data, { type: 'binary' });
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
    return file ;
  }
  pushdata(dataString) {
    const obj = dataString['data'];
    const objFinalArr = [];
    let objFinal = {};
    console.log("object", obj);
    obj.forEach(function(element) {
      console.log("object tiap", element);
      objFinal = element;
      objFinalArr.push(objFinal)
    });
    Array.prototype.push.apply(this.data, objFinalArr);
    console.log("dataku jadi", this.data)
  }
}
