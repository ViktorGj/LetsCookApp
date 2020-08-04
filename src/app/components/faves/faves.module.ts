import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavesRoutingModule } from './faves-routing.module';
import { FavesComponent } from './faves.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    FavesComponent
  ],
  imports: [
    CommonModule,
    FavesRoutingModule,
    SharedModule
  ]
})
export class FavesModule { }
