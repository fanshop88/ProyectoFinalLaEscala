import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { CuriosityRoutingModule } from './curiosity-routing.module';
import { CuriosityComponent } from './curiosity.component';
import { CuriosityCardComponent } from './curiosity-card/curiosity-card.component';


@NgModule({
  declarations: [
    CuriosityComponent,
    CuriosityCardComponent
  ],
  imports: [
    CommonModule,
    CuriosityRoutingModule,
    MaterialModule
  ]
})
export class CuriosityModule { }
