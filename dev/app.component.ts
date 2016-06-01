import {Component} from 'angular2/core';
import {DataDriveFormComponent} from "./data-drive-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-data-drive></my-data-drive>
    `,
    directives: [DataDriveFormComponent]
})
export class AppComponent {

}