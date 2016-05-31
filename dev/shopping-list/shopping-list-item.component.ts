import {Component, EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";
import {ShoppingListService} from "./shopping-list.service";


@Component({
    selector: 'shopping-list-item',
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>
        <button class="danger" (click)="onDelete()">Delete</button>
        <button (click)="onDone()">Done</button>
    `,
    inputs: ['item'],
    outputs: ['done']
})
export class ShoppingListItemComponent {
    item =  {name: '', amount: 0};
    done = new EventEmitter<any>();

    constructor(private _shoppingListService: ShoppingListService) {

    }

    onDelete(item: ListItem) {
        this._shoppingListService.deleteItem(null);
        this.onDone(this.item);
    }
    
    onDone(item: ListItem) {
        this.done.emit(null);
    }
}