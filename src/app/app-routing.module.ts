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
  {
    path: 'likes',
    loadChildren: () => import('./likes/likes.module').then( m => m.LikesPageModule)
  },
  {
    path: 'playlist-est',
    loadChildren: () => import('./playlist-est/playlist-est.module').then( m => m.PlaylistEstPageModule)
  },
  {
    path: 'playlist-ej',
    loadChildren: () => import('./playlist-ej/playlist-ej.module').then( m => m.PlaylistEjPageModule)
  },
  {
    path: 'playlist-dor',
    loadChildren: () => import('./playlist-dor/playlist-dor.module').then( m => m.PlaylistDorPageModule)
  },
  {
    path: 'playlist-fiesta',
    loadChildren: () => import('./playlist-fiesta/playlist-fiesta.module').then( m => m.PlaylistFiestaPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'indie',
    loadChildren: () => import('./indie/indie.module').then( m => m.IndiePageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./rock/rock.module').then( m => m.RockPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
