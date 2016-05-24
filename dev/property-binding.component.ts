import {Component, Input, EventEmitter} from 'angular2/core'

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is a child component</h2>
        <p>Hey {{name}} and I am {{age}}!</p>
        <h4>Hobbies</h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `,
    inputs: ['name:myName'],
    outputs: ['hobbiesChanged']
})
export class PropertyBindingComponent {
    name: String = '';
    @Input('myAge') age:number = 20;
    hobbiesChanged = new EventEmitter<String>();

    onHobbiesChanged(hobbies: String) {
        this.hobbiesChanged.emit(hobbies);
    }
}