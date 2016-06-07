import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
    template: `
        This is component1
        <div>Source was {{source}}</div>
        <div>Optional: {{optional}}</div>
    `
})
export class Component1 implements OnInit{
    source:string;
    optional:string;

    constructor(private _routeParam: RouteParams) {}

    ngOnInit():any {
        this.source = this._routeParam.get('source');
        this.optional = this._routeParam.get('optional');
    }
}