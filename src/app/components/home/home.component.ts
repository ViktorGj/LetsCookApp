import { Component, OnInit, OnChanges } from '@angular/core';
import { MEAL_FILTERS, Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from '../services/recipes.service';

import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filters = MEAL_FILTERS;
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  searchedRecipes: Observable<any[]>;
  searchControl = new FormControl();

  constructor(
    private recipesService: RecipesService,
    private router: Router) {
  }

  ngOnInit() {
    this.recipesService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes;
    });

    this.searchControl.valueChanges.pipe(
      map(value => this._filter(value))
    ).subscribe(recipes => this.filteredRecipes = recipes);

  }

  viewRecipe(id) {
    this.router.navigate(['recipe', { id: `${id}` }]);
  }

  selectTab(event) {
    const selectedFilter = this.filters[event.index];
    if (selectedFilter === 'all') {
      this.filteredRecipes = this.recipes;
    } else {
      this.filteredRecipes = this.recipes.filter(recipe => recipe.mealType === selectedFilter);
    }
  }

  _filter(value: string): Recipe[] {
    const filterValue = this._normalizeValue(value);
    return this.recipes.filter(recipe => this._normalizeValue(recipe.title).includes(filterValue));
  }

  _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
