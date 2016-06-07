import {Component, OnInit} from "angular2/core";
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Comp1MainComponent} from "./comp1-main.component";
import {Comp1SubComponent} from "./comp1-sub.component";

@Component({
    template: `
        This is component1
        <div>Source was {{source}}</div>
        <div>Optional: {{optional}}</div>
        <div><a [routerLink]="['Component1Main']">Main</a></div>
        <div><a [routerLink]="['Component1Sub']">Sub</a></div>
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
    {path: '/subroute',name: 'Component1Sub', component: Comp1SubComponent}
])
export class Component1 implements OnInit{
    source:string;
    optional:string;

    constructor(private _routeParam: RouteParams) {}

    ngOnInit():any {
        this.source = this._routeParam.get('source');
        this.optional = this._routeParam.get('optional');
    }
}