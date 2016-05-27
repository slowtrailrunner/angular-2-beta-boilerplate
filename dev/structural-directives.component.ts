import {Component} from "angular2/core";
import {UnlessDirective} from "./unless.directive";


@Component({
    selector: 'my-structural-directives',
    template: `
    <section class="directive">
        <h2>*ngIf</h2>
        <div>Enter a number greater than 10
        <br>
        <input type="number" #number (keyup)="0">
        </div>
        <div *ngIf="number.value > 10">Number is greater than 10 ({{number.value}})</div>
    </section>
    <section class="directive">
        <h2>*ngFor</h2>
        <div>
            <ul>
                <li *ngFor="#item of list, #i = index">{{item}} {{i}}</li>
            </ul>
        </div>
    </section>
    <section class="directive">
        <h2>[ngSwitch]</h2>
        <div>
            Enter red, blue or grean
            <br>
            <input type="text" #color (keyup)="0">
        </div>
        <div [ngSwitch]="color.value">
            <template [ngSwitchWhen]="'red'"><span class="red">Color is red</span> </template>
            <template [ngSwitchWhen]="'blue'"><span class="blue">Color is blue</span> </template>
            <template [ngSwitchWhen]="'green'"><span class="green">Color is green</span> </template>
            <template ngSwitchDefault><span>No recognized color entered</span> </template>
        </div>
    </section>
    <section class="directive">
        <h2>Custom directive: myUnless</h2>
        <div>
            Enter true or false
            <br>
            <input type="text" #condition (keyup)="0">
        </div>
        <div *myUnless="condition.value != 'false'">
            Only shown if 'false' was entered
        </div>
        
    </section>
    `,
    directives: [UnlessDirective]
})
export class StructuralDirectivesComponent {
    list = ['Apple','Milk','Bread'];
}
