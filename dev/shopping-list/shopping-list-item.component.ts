import {Component, EventEmitter} from "angular2/core";
import {ListItem} from "../list-item";


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
    outputs: ['removed','done']
})
export class ShoppingListItemComponent {
    item =  {name: '', amount: 0};
    removed = new EventEmitter<ListItem>();
    done = new EventEmitter<ListItem>();

    onDelete(item: ListItem) {
        this.removed.emit(this.item);
    }
    
    onDone(item: ListItem) {
        this.done.emit(this.item);
    }
}