import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BerandaComponent} from './beranda/beranda.component';
import { RekapitulasiComponent } from "./psu/rekapitulasi/rekapitulasi.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path : 'beranda',
      component: BerandaComponent,
    },
    {
      path: 'rekapitulasi',
      component: RekapitulasiComponent,
    },
    {
      path : 'psu',
      loadChildren: () => import('./psu/psu.module')
      .then(m => m.PsuModule),
    },
    {
      path : 'psu-kawasan-perumahan',
      loadChildren: () => import('./psu/psu-kawasan-perumahan/psu-kawasan-perumahan.module')
      .then(m => m.PsuKawasanPerumahanModule),
    },
    {
      path: 'psu-kawasan-permukiman',
      loadChildren: () => import('./psu/psu-kawasan-permukiman/psu-kawasan-permukiman.module')
        .then(m => m.PsuKawasanPermukimanModule),
    },
    {
      path: 'psu-pertamanan',
      loadChildren: () => import('./psu/psu-pertamanan/psu-pertamanan.module')
        .then(m => m.PsuPertamananModule),
    },
    {
      path: 'psu-user',
      loadChildren: () => import('./psu/user/user.module')
      .then(m => m.UserModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'beranda',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
