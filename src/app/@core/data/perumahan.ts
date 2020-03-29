import {Observable} from "rxjs";

export abstract class TableDataPerumahan {
  abstract getData(): Promise<any>;
  abstract importFileExcel(event: any);
  abstract exportAsExcelFile(json: any[], excelFileName: string): void;
  abstract saveAsExcelFile(buffer: any, fileName: string): void;

}
