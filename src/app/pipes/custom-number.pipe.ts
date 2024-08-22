import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customNumber',
    standalone: true
})
export class CustomNumberPipe implements PipeTransform {
    transform(
        value: number | string,
        style: string,
        currency: string,
        locale: string
    ): string {
        const numberFormat = new Intl.NumberFormat(locale, { style, currency });
        return numberFormat.format(Number(value));
    }
}