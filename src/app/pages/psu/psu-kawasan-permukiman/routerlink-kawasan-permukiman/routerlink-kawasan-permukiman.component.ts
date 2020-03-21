import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from "@nebular/theme";
import {PopupDataPermukimanComponent} from "../popup-data-permukiman/popup-data-permukiman.component";

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

  // onClick() {
  //   console.log('rowData === ', this.rowData);
  //   switch (this.rowData.no) {
  //     case 1:
  //       this.url = '../../pages/psu/psu-kawasan-permukiman/detail-data-permukiman';
  //       break;
  //     case 2:
  //       this.url = '../../pages/psu/psu-kawasan-permukiman/popup-data-permukiman';
  //       break;
  //     case 3:
  //       this.url = 'Tuesday';
  //       break;
  //   }
  // }

  openWindowForm() {
    this.windowService.open(PopupDataPermukimanComponent, {title: `Window`});
  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }
  openWindowWithoutBackdrop() {
    this.windowService.open(
      this.disabledEscTemplate,
      {
        title: 'Window without backdrop',
        hasBackdrop: false,
        closeOnEsc: false,
      },
    );
  }

}
