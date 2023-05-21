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
  },
  
  {
    path: 'seleccion-nombre',
    loadChildren: () => import('./seleccion-nombre/seleccion-nombre.module').then( m => m.SeleccionNombrePageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'artistas',
    loadChildren: () => import('./artistas/artistas.module').then( m => m.ArtistasPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'inicio-tab',
    loadChildren: () => import('./inicio-tab/inicio-tab.module').then( m => m.InicioTabPageModule)
  },
  {
    path: 'buscar-tab',
    loadChildren: () => import('./buscar-tab/buscar-tab.module').then( m => m.BuscarTabPageModule)
  },
  {
    path: 'libreria-tab',
    loadChildren: () => import('./libreria-tab/libreria-tab.module').then( m => m.LibreriaTabPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'reproductor',
    loadChildren: () => import('./reproductor/reproductor.module').then( m => m.ReproductorPageModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./playlists/playlists.module').then( m => m.PlaylistsPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
