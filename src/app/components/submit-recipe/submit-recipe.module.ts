import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitRecipeRoutingModule } from './submit-recipe-routing.module';
import { SubmitRecipeComponent } from './submit-recipe.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [SubmitRecipeComponent],
  imports: [
    CommonModule,
    SubmitRecipeRoutingModule,
    SharedModule
  ]
})
export class SubmitRecipeModule { }
