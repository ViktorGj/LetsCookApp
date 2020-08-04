import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesPath = 'allRecipes';
  recipes$: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.recipes$ = this.db.list(this.recipesPath).valueChanges();
    // this.recipes$ = this.db.list(this.recipesPath).snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
    //   )
    // )
  }

  getRecipes(): Observable<any[]> {
    return this.recipes$;
  }

  submitRecipe(recipe: Recipe) {
    const obj = this.db.list(this.recipesPath).push({ recipe });
    const key = obj.key;
    const newRecipe = {
      id: key,
      ...recipe
    };
    return this.db.list(this.recipesPath).set(key, newRecipe);
  }

  updateRecipe(id, recipe: Recipe) {
    return this.db.list(this.recipesPath).set(id, recipe);
  }

  getRecipe(id: string) {
    return this.db.object(this.recipesPath + `/${id}`).valueChanges();
  }

  deleteRecipe(id: string) {
    return this.db.list(this.recipesPath).remove(id);
  }

}
