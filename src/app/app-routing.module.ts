import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },  {
    path: 'registro-contra',
    loadChildren: () => import('./registro-contra/registro-contra.module').then( m => m.RegistroContraPageModule)
  },
  {
    path: 'inicio-contra',
    loadChildren: () => import('./inicio-contra/inicio-contra.module').then( m => m.InicioContraPageModule)
  },
  {
    path: 'seleccion-nombre',
    loadChildren: () => import('./seleccion-nombre/seleccion-nombre.module').then( m => m.SeleccionNombrePageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
