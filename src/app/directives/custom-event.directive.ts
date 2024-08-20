import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appCustomEvent]',
    standalone: true
})
export class CustomEventDirective {

    constructor() { }

    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        console.log('Element clicked', event);
    }

}
