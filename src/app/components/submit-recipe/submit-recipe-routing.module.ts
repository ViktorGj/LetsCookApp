import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmitRecipeComponent } from './submit-recipe.component';


const routes: Routes = [
  {
    path: '',
    component: SubmitRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitRecipeRoutingModule { }
