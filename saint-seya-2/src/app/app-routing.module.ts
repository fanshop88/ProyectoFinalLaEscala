import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'personaje',
        loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule)
      },
      {
        path: 'clase',
        loadChildren: () => import('./components/clase/clase.module').then(m => m.ClaseModule)
      },
      {
        path: 'debut',
        loadChildren: () => import('./components/debut/debut.module').then(m => m.DebutModule)
      },
    ]
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
