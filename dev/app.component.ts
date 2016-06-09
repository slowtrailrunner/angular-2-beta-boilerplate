import {Component} from 'angular2/core';
import {RecipesComponent} from "./recipe-book/recipes.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <ul>
                    <li><a>Recipes</a></li>
                    <li><a>Shopping Lsit</a></li>
                </ul>
            </nav>
        </header>
        <div class="main">
            <my-recipes></my-recipes>
        </div>
    `,
    directives: [RecipesComponent]
})
export class AppComponent {

}