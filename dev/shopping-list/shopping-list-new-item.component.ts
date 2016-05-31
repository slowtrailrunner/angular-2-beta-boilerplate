import {Component} from "angular2/core";
import {ListItem} from "../list-item";
import {ShoppingListService} from "./shopping-list.service";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>
        <button (click)="onClick()" [disabled]="item.amount === 0">Add Item</button>
    `
})
export class ShoppingListNewItemComponent {
    item = {name: '', amount: 0};

    constructor(private _shippingListService: ShoppingListService) {

    }

    onClick() {
        this._shippingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }
}