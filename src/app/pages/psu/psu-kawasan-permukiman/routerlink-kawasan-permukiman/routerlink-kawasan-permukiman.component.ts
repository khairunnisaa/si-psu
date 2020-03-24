import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from "@nebular/theme";
import {PopupDataPermukimanComponent} from "./popup-data-permukiman.component";

@Component({
  selector: 'ngx-routerlink-kawasan-permukiman',
  templateUrl: './routerlink-kawasan-permukiman.component.html',
  styleUrls: ['./routerlink-kawasan-permukiman.component.scss'],
})
export class RouterlinkKawasanPermukimanComponent implements OnInit {

  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true })
  disabledEscTemplate: TemplateRef<HTMLElement>;
  constructor(private windowService: NbWindowService) { }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  openWindowForm() {
    console.log("row data permukiman", this.rowData);
    this.windowService.open(PopupDataPermukimanComponent,
      {
        title: this.rowData.nama_tpu,
        context: {
          nama_tpu: this.rowData.nama_tpu,
          luas_tpu: this.rowData.luas_tpu,
          foto: 10,
          daya_tampung_tpu: this.rowData.daya_tampung_tpu,
          kecamatan: this.rowData.kecamatan,
          kelurahan: this.rowData.kelurahan,
          RT: this.rowData.RT,
          RW: this.rowData.RW,
          status: this.rowData.status,
          keterangan: this.rowData.keterangan,
          dataPermukiman: this.rowData,
        },
      });
  }
}
