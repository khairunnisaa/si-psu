import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents } from './maps-routing.module';
import {SearchComponent} from "./search-map/search/search.component";
import {MapComponent} from "./search-map/map/map.component";

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMbVQJuBRWDV1jFUVZ9Gzsu-nWOEr9LdM',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
    NbCardModule,
  ],
  exports: [
    SearchComponent,
    MapComponent
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MapsModule { }
