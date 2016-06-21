import {Component, OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RouteParams} from "angular2/router";
import {RecipeService} from "./recipe.service";

@Component({
    templateUrl: './templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    private _recipeIndex: string;

    constructor(
        private _routParams: RouteParams,
        private _recipeService: RecipeService) {

    }

    ngOnInit():any {
        let itemIndex = this._routParams.get('recipeIndex');
        this._recipeIndex = itemIndex;
        this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
    }
}