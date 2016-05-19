/**
 * Created by jasonholmberg on 5/18/16.
 */

import {Component, OnInit} from 'angular2/core';
import {TestComponet} from "./test.component";

@Component({
    selector: 'my-component',
    template: `
        Hello, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span> and this is my very first angular 2 component! 
        <div [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</div>
        <br>
        <br>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0" >
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">Only enabled it 'yes' was entered</button>
        <test></test>
    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponet]
})
export class MyComponentComponent implements OnInit{
    name: String;

    ngOnInit():any {
        this.name = 'Jason';
    }
}