import {Injectable} from "angular2/core";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Injectable()
export class LoggingService {

    private _lastMessage = '';

    log(message: string) {
        console.log("Current message: "+ message + " Last message: "+this._lastMessage);
        this._lastMessage = message;
    }
}