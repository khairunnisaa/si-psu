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
    this.windowService.open(PopupDataPermukimanComponent, {title: `Window`});
  }
}
