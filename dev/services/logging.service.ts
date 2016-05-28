import {Injectable} from "angular2/core";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Injectable()
export class LoggingService {
    log(message: String) {
        console.log(message);
    }
}