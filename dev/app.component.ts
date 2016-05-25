import {Component} from 'angular2/core';
import {AttributeDirectivesComponent} from "./attribute-directives.component";

@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
    `,
    directives: [AttributeDirectivesComponent]
})
export class AppComponent {

}