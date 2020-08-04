import { Component, OnInit } from '@angular/core';
import { MEAL_CATEGORIES } from 'src/app/models/recipe.model';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';
import { EditViewEnum, RecipesStateService } from '../services/recipes-state.service';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.scss']
})
export class FavesComponent implements OnInit {

  recipes$;
  filters = MEAL_CATEGORIES;

  constructor(
    private recipesStateService: RecipesStateService,
    private recipesService: RecipesService,
    private router: Router) { }

  ngOnInit() {
    this.recipes$ = this.recipesService.getRecipes();
  }

  viewRecipe(id) {
    this.recipesStateService.setEditViewMode(EditViewEnum.View);
    this.router.navigate(['recipe', {id: `${id}`}]);
  }

}
