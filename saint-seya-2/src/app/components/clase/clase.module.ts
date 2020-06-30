import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaseRoutingModule } from './clase-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'src/app/material.module';
import { ClaseComponent } from './clase.component';
import { ClaseCardComponent } from './clase-card/clase-card.component';


@NgModule({
  declarations: [
    ClaseComponent,
    ClaseCardComponent
  ],
  imports: [
    CommonModule,
    ClaseRoutingModule,
    NgxPaginationModule,
    MaterialModule
  ]
})
export class ClaseModule { }
