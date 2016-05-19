import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()}},
        <input type="text" [value]="name" [ngClass]="{red: true}" [disabled]="1 === 1">
    `,
})
export class AppComponent {
    name: String = "Jason";

    onTest(): boolean {
        return 1===1;
    }
}