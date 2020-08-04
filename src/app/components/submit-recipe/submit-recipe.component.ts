import { Component, OnInit } from '@angular/core';
import { MEAL_CATEGORIES } from 'src/app/models/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesStateService, EditViewEnum } from '../services/recipes-state.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Observable } from 'rxjs';
import { ActionTypeEnum } from 'src/app/models/action-type.enum';

@Component({
  selector: 'app-submit-recipe',
  templateUrl: './submit-recipe.component.html',
  styleUrls: ['./submit-recipe.component.scss']
})
export class SubmitRecipeComponent implements OnInit {

  filters = MEAL_CATEGORIES;
  form: FormGroup;
  recipe$: Observable<any>;
  action: ActionTypeEnum;


  constructor(
    private router: Router,
    private recipeStateService: RecipesStateService,
    private recipeService: RecipesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipe(this.route.snapshot.paramMap.get('id'));
  }



  getRecipe(id) {
    if (id) {
      this.recipeService.getRecipe(id).subscribe(recipe => this.populateForm(recipe));
      this.action = ActionTypeEnum.Update;
    } else {
      this.action = ActionTypeEnum.Save;
      this.form = this.formBuilder.group({
        title: '',
        imgUrl: '',
        ingredients: '',
        directions: '',
        readyIn: '',
        servings: '',
        prepTime: '',
        cookTime: '',
        mealType: '',
      });
    }
  }

  populateForm(recipe) {
    if (recipe) {
      this.form = this.formBuilder.group({
        id: [recipe.id ? recipe.id : null],
        title: [recipe.title ? recipe.title : null],
        imgUrl: [recipe.imgUrl ? recipe.imgUrl : null],
        ingredients: [recipe.ingredients ? recipe.ingredients : null],
        directions: [recipe.directions ? recipe.directions : null],
        readyIn: [recipe.readyIn ? recipe.readyIn : null],
        servings: [recipe.servings ? recipe.servings : null],
        prepTime: [recipe.prepTime ? recipe.prepTime : null],
        cookTime: [recipe.cookTime ? recipe.cookTime : null],
        mealType: [recipe.mealType ? recipe.mealType : null],
      });
    }
  }

  submit(form) {
    const value = form.value;
    this.saveOrUpdate(value, this.action);
  }

  saveOrUpdate(recipe, actionType) {
    if (actionType === ActionTypeEnum.Save) {
      this.recipeService.submitRecipe(recipe);
    } else {
      this.recipeService.updateRecipe(recipe.id, recipe);
    }
    this.router.navigate(['home']);
  }

  navigateTo() {
    this.router.navigate(['home']);
  }

}
