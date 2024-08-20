import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appRestrictedChars]',
    standalone: true
})

export class RestrictedCharsDirective {
    @Input() restrictedChars: string[] = [];

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange() {
        this.handleInput();
    }

    @HostListener('beforeinput', ['$event']) onBeforeInput(event: InputEvent) {
        if (event.inputType === 'insertFromPaste' || event.inputType === 'insertText') {
            this.handleInput();
        }
    }

    private handleInput() {
        const inputElement = this.el.nativeElement as HTMLInputElement;
        const originalValue = inputElement.value;
        let newValue = inputElement.value;

        // Remove restricted characters
        this.restrictedChars.forEach((char) => {
            newValue = newValue.replace(new RegExp(char, 'g'), '');
        });

        if (originalValue !== newValue) {
            // Update the input value without restricted characters
            inputElement.value = newValue;

            // Emit the input event to make sure Angular bindings are updated
            inputElement.dispatchEvent(new Event('input'));
        }
    }
}