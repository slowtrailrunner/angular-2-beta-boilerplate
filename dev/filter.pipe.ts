/**
 * Created by jasonholmberg on 6/1/16.
 */
import {Pipe, PipeTransform} from 'angular2/core';
import {ListItem} from './list-item';

@Pipe({
    name: 'myFilter',
    pure: false
})
export class FilterPipe implements PipeTransform{

    transform(value: ListItem[], args:string[]):any {
        console.log("Filtering with: " + args[0]);
        if(value.length === 0) {
            return value;
        }

        let resultArray = [];
        for (let item of value) {
            if (item.name.match('^.*' + args[0] + '.*$')) {
                resultArray.push(item);
            }
        }
        console.log(resultArray);
        return resultArray;

    }
}