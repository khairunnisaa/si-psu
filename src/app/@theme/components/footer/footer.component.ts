import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>
      <a href="" target="_blank">Pemerintah Kabupaten Bogor</a></b> 2020</span>
  `,
})
export class FooterComponent {
}
