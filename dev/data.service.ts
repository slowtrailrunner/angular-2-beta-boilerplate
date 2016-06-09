import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
/**
 * Created by jasonholmberg on 6/8/16.
 */

@Injectable()
export class DataService{
    constructor(private _http: Http) { }

    postDate(data: any): Observable<any> {
        const body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'applicationj/son');
        // This observalble is not fired, jsut seet but not fired
        return this._http.post('https://ng2-guide-project.firebaseio.com/data.json',body,{headers : headers})
            .map(response => response.json());
    }

    getData(): Observable<any> {
        return this._http.get('https://ng2-guide-project.firebaseio.com/data.json')
            .map(responce => responce.json());
    }
}