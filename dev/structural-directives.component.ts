import {Component} from "angular2/core";


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
    `
})
export class StructuralDirectivesComponent {

}
