import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appCustomAttribute]',
    standalone: true
})
export class CustomAttributeDirective implements OnChanges {

    @Input()
    backgroundColor!: string;

    constructor(private elementRef: ElementRef) {
        // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('transparent');
    }

    private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

    ngOnChanges() {
      this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    }
    
}
