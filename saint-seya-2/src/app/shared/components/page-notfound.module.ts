import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [PageNotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PageNotfoundModule { }
