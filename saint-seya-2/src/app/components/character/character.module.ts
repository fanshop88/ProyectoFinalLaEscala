import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [CharacterComponent, CharacterCardComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MaterialModule,
    NgxPaginationModule
  ]
})
export class CharacterModule { }
