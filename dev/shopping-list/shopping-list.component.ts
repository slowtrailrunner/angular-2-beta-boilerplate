import {Component, OnInit} from "angular2/core";
import {ShoppingListEditComponent} from "./shopping-list-edit.component";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";
/**
 * Created by jasonholmberg on 6/15/16.
 */

@Component({
    template: `
        <h1>Shopping List</h1>
        <my-shopping-list-edit [ingredient]="selectedItem"></my-shopping-list-edit>
        <div class="list">
            <button class="btn" (click)="onAddItem()">Add new item</button>
            <ul>
                <li *ngFor="#item of shoppingList" (click)="onSelectItem(item)">{{item.name}} ({{item.amount}})</li>
            </ul>
        </div>
        
    `,
    directives: [ShoppingListEditComponent],
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
    shoppingList: Ingredient[];
    selectedItem: Ingredient = null;

    constructor(private _shoppingListService: ShoppingListService) {

    }

    ngOnInit():any {
        this.shoppingList = this._shoppingListService.getAllItems();
    }

    onAddItem() {
        this.selectedItem = null;
    }

    onSelectItem(item: Ingredient) {
        this.selectedItem = item;
    }
}
