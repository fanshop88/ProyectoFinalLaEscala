import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';


const routes: Routes = [
  {
    path:'',
    component:CharacterComponent
  },
  {
    path:'detail/:id',
    component:CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
