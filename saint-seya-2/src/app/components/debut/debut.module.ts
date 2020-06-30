import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebutRoutingModule } from './debut-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from 'src/app/material.module';
import { DebutComponent } from './debut.component';
import { DebutCardComponent } from './debut-card/debut-card.component';


@NgModule({
  declarations: [
    DebutComponent,
    DebutCardComponent
  ],
  imports: [
    CommonModule,
    DebutRoutingModule,
    NgxPaginationModule,
    MaterialModule
  ]
})
export class DebutModule { }
