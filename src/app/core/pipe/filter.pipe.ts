import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true,
})
export class filter implements PipeTransform {
    transform(value: any, args?: any) {
        if (!value) return null;
        if (!args) return value;
        args = args.toLowerCase();
        // debugger;
        return value.filter(function (item: any) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}