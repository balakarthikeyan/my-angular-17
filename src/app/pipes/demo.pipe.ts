import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'demo',
    standalone: true
})
export class DemoPipe implements PipeTransform {
    transform(n: number): string {
        return (n).toFixed(2) + 'Kg';
    }
}