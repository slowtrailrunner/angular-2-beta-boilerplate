import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Component1} from "./component1.component";
import {Component2} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <header>
        <ul>
            <li><a [routerLink]="['Component1']">Component1</a></li>
            <li><a [routerLink]="['Component2']">Component2</a></li>
        </ul>
        </header>
        <!-- only one router-outlet per template -->
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/component1', name: 'Component1', component: Component1, useAsDefault: true},
    {path: '/component2', name: 'Component2', component: Component2}
])
export class AppComponent {

}