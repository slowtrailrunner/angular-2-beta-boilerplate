import {Component, OnInit} from "angular2/core";
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from "../list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {ShoppingListService} from "./shopping-list.service";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item></shopping-list-new-item>
        </section>
        <section *ngIf="_shoppingListService.hasItems()">
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngFor="#listItem of listItems" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != null">
            <shopping-list-item [item]="selectedItem" (done)="onDone($event)"></shopping-list-item>
        </section>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
    listItems: Array<ListItem>;
    selectedItem:  ListItem;

    constructor(private _shoppingListService: ShoppingListService) {

    }

    onSelect(item: ListItem) {
        this.selectedItem = item;
    }

    ngOnInit():any {
        this.listItems = this._shoppingListService.getItems();
    }

    onDone() {
        this.selectedItem = null;
    }
}