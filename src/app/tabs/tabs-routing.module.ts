import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'inicio-tab',
        loadChildren: () => import('./../inicio-tab/inicio-tab.module').then( m => m.InicioTabPageModule)
      },
      {
        path: 'buscar-tab',
        loadChildren: () => import('./../buscar-tab/buscar-tab.module').then( m => m.BuscarTabPageModule)
      },
      {
        path: 'libreria-tab',
        loadChildren: () => import('./../libreria-tab/libreria-tab.module').then( m => m.LibreriaTabPageModule)
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
