import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesStateService, EditViewEnum } from '../services/recipes-state.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private recipeStateService: RecipesStateService) { }

  ngOnInit() {
  }

  openSubmitRecipe() {
    this.recipeStateService.setEditViewMode(EditViewEnum.Edit);
    this.router.navigate(['submit-recipe']);
  }

  openFaves() {
    this.recipeStateService.setEditViewMode(EditViewEnum.Edit);
    this.router.navigate(['faves']);
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

}
