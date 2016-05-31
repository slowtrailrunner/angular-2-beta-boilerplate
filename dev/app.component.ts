import {Component} from 'angular2/core';
import {TemplateDriveFormComponent} from "./template-drive-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-template-drive></my-template-drive>
    `,
    directives: [TemplateDriveFormComponent]
})
export class AppComponent {

}