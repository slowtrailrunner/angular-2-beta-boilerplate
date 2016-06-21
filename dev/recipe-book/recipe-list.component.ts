import {Component, OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RecipeService} from "./recipe.service";
import {Router} from "angular2/router";

@Component({
    selector: 'my-recipe-list',
    template: `
        <button class="btn" (click)="onAddRecipe()">Add Recipe</button>
        <ul>
            <li *ngFor="#item of recipes" (click)="onSelect(item)">
                <div class="img"><img alt="Recipe Image" [src]="item.imageUrl"></div>
                <div class="text">{{item.name}}</div>
            </li>
        </ul>
    `
})
export class RecipeListComponent implements OnInit{
    recipes: Recipe[];

    constructor(
        private _recipeService: RecipeService,
        private _router: Router) {

    }

    ngOnInit():any {
        this.recipes = this._recipeService.getAllRecipes();
    }

    onSelect(item: Recipe) {
        this._router.navigate(['RecipeDetail',{recipeIndex: Number(this._recipeService.getRecipeIndex(item))}]);
    }
}