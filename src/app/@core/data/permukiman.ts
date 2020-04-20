
export abstract class TableDataPermukiman {
  abstract getData(): Promise<any>;
  abstract postData(permukiman);
  abstract deleteData(id): Promise<any>;
}
