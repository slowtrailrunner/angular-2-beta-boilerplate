import {Component, OnInit} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RouteParams, Router} from "angular2/router";
import {RecipeService} from "./recipe.service";

@Component({
    templateUrl: './templates/recipes/recipe-detail.tpl.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    private _recipeIndex: string;

    constructor(
        private _routParams: RouteParams,
        private _recipeService: RecipeService,
        private _router: Router) {

    }

    onEdit() {
        this._router.navigate(['RecipeEdit', {editMode: 'edit', itemIndex: this._recipeIndex}]);
    }

    ngOnInit():any {
        let itemIndex = this._routParams.get('recipeIndex');
        this._recipeIndex = itemIndex;
        this.recipe = this._recipeService.getRecipe(itemIndex !== null ? +itemIndex : null) || null;
    }
}