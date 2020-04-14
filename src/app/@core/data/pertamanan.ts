export abstract class TableDataPertamanan {
  abstract getData(): Promise<any>;
  abstract postData(pertamanan);
  abstract deleteData(id): Promise<any>;
}
