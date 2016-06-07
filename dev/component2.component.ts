import {Component} from "angular2/core";
import {Router, ComponentInstruction, CanDeactivate} from "angular2/router";

@Component({
    template: `
        <h2>Component2</h2>
        <button (click)="onNavigate()">Take me to Component1</button>
    `
})
export class Component2 implements CanDeactivate {

    constructor(private _router: Router) {}

    onNavigate() {
        this._router.navigate(['Component1',{source: 'Component2'}])
    }


    routerCanDeactivate(nextInstruction:ComponentInstruction,
                        prevInstruction:ComponentInstruction):boolean|Promise<boolean> {
        return confirm("Are you sure?");
    }
}