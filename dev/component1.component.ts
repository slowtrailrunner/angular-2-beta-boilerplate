import {Component} from "angular2/core";
import {LoggingService} from "./services/logging.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
    selector: 'component-1',
    template: `
    <div>
        <h1>This is the Logging Serivce</h1>
        <input type="text" #message>
        <button (click)="onLog(message.value)">Send</button>
    </div>
    <div>
        <h1>Calculator Service</h1>
        <p>Add or Multiply these two numbers</p>
        <input type="text" #num1>
        <input type="text" #num2>
        <button (click)="onMultiply(num1.value,num2.value)">Multiply</button>
        <button (click)="onAdd(num1.value,num2.value)">Add</button>
        <br>
        <p>Result: {{result}}</p>
    </div>
    <div>
        <h1>Data Service</h1>
        <div>
            <div>New data</div>
            <input type="text" #newData>
            <button (click)="onNewData(newData.value)">Insert new data</button>
        </div>
        <div>
            <br><br>
            <button (click)="onGetData()">Get some data</button>
            <p>Data: {{data}}</p>
        </div>
            
    </div>
    `,
    providers: [LoggingService, CalculatorService]
})
export class Component1Component {

    result:string
    data: string;

    constructor(
        private _log:LoggingService,
        private _calc:CalculatorService,
        private _data:DataService
    ) {

    }

    onLog(message:string) {
        this._log.log(message);
    }

    onMultiply(num1: string, num2: string) {
        this.result = ''+this._calc.multiply(+num1, +num2);
    }

    onAdd(num1: string, num2: string) {
        this.result = ''+this._calc.add(+num1, +num2);
    }

    onGetData() {
        this.data = this._data.getRandomString();
    }

    onNewData(value: string) {
        this._data.insert(value);
    }
}