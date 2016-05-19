import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{onTest()}},
        <input type="text" value="{{name}}"/>
    `,
})
export class AppComponent {
    name: String = "Jason";

    onTest(): boolean {
        return 1===1;
    }
}