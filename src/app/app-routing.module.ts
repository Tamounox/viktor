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
    loadChildren: () => import('./pages/Jeux/definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'microcope',
    loadChildren: () => import('./pages/Jeux/microcope/microcope.module').then( m => m.MicrocopePageModule)
  },
  {
    path: 'zoologie',
    loadChildren: () => import('./pages/Jeux/zoologie/zoologie.module').then( m => m.ZoologiePageModule)
  },
  {
    path: 'tourbonus',
    loadChildren: () => import('./pages/Jeux/tourbonus/tourbonus.module').then( m => m.TourbonusPageModule)
  },
  {
    path: 'definition',
    loadChildren: () => import('./pages/Jeux/definition/definition.module').then( m => m.DefinitionPageModule)
  },
  {
    path: 'vinner',
    loadChildren: () => import('./pages/vinner/vinner.module').then( m => m.VinnerPageModule)
  },
  {
    path: 'tourisme',
    loadChildren: () => import('./pages/Jeux/tourisme/tourisme.module').then( m => m.TourismePageModule)
  },
  {
    path: 'nextJeu',
    loadChildren: () => import('./pages/Jeux/tourisme/tourisme.module').then( m => m.TourismePageModule)
  },
  {
    path: 'next-game',
    loadChildren: () => import('./pages/next-game/next-game.module').then( m => m.NextGamePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
