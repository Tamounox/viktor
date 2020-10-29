import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jeu',
    loadChildren: () => import('./pages/jeu/jeu.module').then( m => m.JeuPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'explication',
    loadChildren: () => import('./pages/explication/explication.module').then( m => m.ExplicationPageModule)
  },
  {
    path: 'definition',
    loadChildren: () => import('./definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'microcope',
    loadChildren: () => import('./microcope/microcope.module').then( m => m.MicrocopePageModule)
  },
  {
    path: 'zoologie',
    loadChildren: () => import('./zoologie/zoologie.module').then( m => m.ZoologiePageModule)
  },
  {
    path: 'tourbonus',
    loadChildren: () => import('./tourbonus/tourbonus.module').then( m => m.TourbonusPageModule)
  },
  {
    path: 'definition',
    loadChildren: () => import('./definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'vinner',
    loadChildren: () => import('./vinner/vinner.module').then( m => m.VinnerPageModule)
  },
  {
    path: 'tourisme',
    loadChildren: () => import('./tourisme/tourisme.module').then( m => m.TourismePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
