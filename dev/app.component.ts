import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.compontent";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <h2>No comes the second component</h2>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent]
})
export class AppComponent {

}