import {Component} from 'angular2/core';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
        <h2>First</h2>
        <component-1></component-1>
        <h2>Second</h2>
        <component-2></component-2>
    `,
    directives: [Component1Component,Component2Component]
})
export class AppComponent {

}