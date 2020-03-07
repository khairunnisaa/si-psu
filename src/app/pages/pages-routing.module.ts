import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {BerandaComponent} from './beranda/beranda.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path : 'beranda',
      component: BerandaComponent,

    },
    {
      path : 'psu',
      loadChildren: () => import('./psu/psu.module')
      .then(m => m.PsuModule),
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
