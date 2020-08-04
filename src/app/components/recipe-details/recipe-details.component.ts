import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RecipesStateService, EditViewEnum } from '../services/recipes-state.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe;

  constructor(
    private recipesStateService: RecipesStateService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.recipesStateService.setEditViewMode(EditViewEnum.View);
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const id = params.get('id');
        return this.recipesService.getRecipe(id);
      })
    ).subscribe(x => {
      x.subscribe(recipe => this.recipe = recipe);
    });
  }

  editRecipe(id) {
    this.recipesStateService.setEditViewMode(EditViewEnum.Edit);
    this.router.navigate(['submit-recipe', { id: `${id}` }]);
  }
}
