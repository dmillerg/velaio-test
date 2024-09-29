import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterCompleted',
    standalone: true,
})
export class filterCompleted implements PipeTransform {
    transform(value: any, args?: boolean) {
        if (!value) return null;
        if (args===undefined) return value;
        // debugger;
        return value.filter(function (item: any) {
            return item.completed===args;
        });
    }
}