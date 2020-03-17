import {Component, Input, OnInit} from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {ShowcaseDialogComponent} from '../../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-router-link-perumahan',
  templateUrl: './router-link-perumahan.component.html',
  styleUrls: ['./router-link-perumahan.component.scss'],
})
export class RouterLinkPerumahanComponent implements OnInit {

  renderValue: string;
  @Input() value: string | number;
  @Input() rowData: any;
  url: string;

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick() {
    console.log('rowData input === ', this.rowData);
    switch (this.rowData.id) {
      case 1:
        this.url = '../../../pages/psu-kawasan-perumahan/detail-data-perumahan';
        break;
      case 2:
        this.url = '../../pages/psu/input-data-perumahan';
        break;
      case 3:
        this.url = '../../pages/psu/input-data-perumahan';
        break;
    }
    // this.dialogService.open(ShowcaseDialogComponent, {
    //   context: {
    //     title: this.renderValue,
    //   },
    // });
  }

}
