import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebutComponent } from './debut.component';


const routes: Routes = [
  {
    path:'',
    component:DebutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebutRoutingModule { }
