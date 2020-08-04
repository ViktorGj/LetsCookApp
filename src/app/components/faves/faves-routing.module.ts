import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavesComponent } from './faves.component';


const routes: Routes = [
  {
    path: '',
    component: FavesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavesRoutingModule { }
