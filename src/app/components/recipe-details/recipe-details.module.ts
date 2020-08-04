import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsRoutingModule } from './recipe-details-routing.module';
import { RecipeDetailsComponent } from './recipe-details.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [RecipeDetailsComponent],
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule,
    SharedModule
  ]
})
export class RecipeDetailsModule { }
