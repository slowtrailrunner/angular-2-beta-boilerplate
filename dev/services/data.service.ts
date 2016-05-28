import {Injectable} from "angular2/core";
/**
 * Created by jasonholmberg on 5/27/16.
 */

@Injectable()
export class DataService {
    private _data = ['Summer','Winter','Warm','Cold'];
    
    getRandomString() {
        let rndNum = Math.floor(Math.random() * this._data.length);
        return this._data[rndNum];
    }

    insert(value: string) {
        this._data.push(value);
    }
}