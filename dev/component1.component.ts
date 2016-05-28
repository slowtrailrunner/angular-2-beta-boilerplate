import {Component} from "angular2/core";
import {LoggingService} from "./services/logging.service";

@Component({
    selector: 'component-1',
    template: `
     <input type="text" #message>
     <button (click)="onLog(message.value)">Send</button>
    `,
    providers: [LoggingService]
})
export class Component1Component {

    constructor(private _log: LoggingService) {

    }

    onLog(message: String) {
        this._log.log(message);
    }
}