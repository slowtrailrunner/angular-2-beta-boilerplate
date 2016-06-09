import {Injectable} from "angular2/core";
import {Recipe} from "../shared/recipe";
import {RECIPES} from "../mock/recipes";

@Injectable()
export class RecipeService {
    getAllRecipes() {
        return RECIPES;
    }

    getRecipe(index:number) {
        return RECIPES[index];
    }

    getRecipeIndex(recipe:Recipe) {
        return RECIPES.indexOf(recipe);
    }

    insertRecipe(recipe:Recipe) {
        RECIPES.push(recipe);
    }

    deleteRecipe(index:number) {
        RECIPES.slice(index,1);
    }

    updateRecipe(index:number, recipe:Recipe) {
        RECIPES[index] = recipe;
    }
}