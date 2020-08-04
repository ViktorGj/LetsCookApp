import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'submit-recipe',
    loadChildren: () => import('./components/submit-recipe/submit-recipe.module').then(m => m.SubmitRecipeModule)
  },
  {
    path: 'recipe',
    loadChildren: () => import('./components/recipe-details/recipe-details.module').then(m => m.RecipeDetailsModule)
  },
  {
    path: 'faves',
    loadChildren: () => import('./components/faves/faves.module').then(m => m.FavesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
