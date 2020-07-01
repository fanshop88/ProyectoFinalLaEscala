import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotfoundComponent } from '../app/shared/components/page-notfound/page-notfound.component';

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
      {
        path: 'curiosity',
        loadChildren: () => import('./components/curiosity/curiosity.module').then(m => m.CuriosityModule)
      },
    ]
  },
  {
    path: '**',
    component:PageNotfoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
