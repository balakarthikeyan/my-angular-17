import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[appPasswordStrength]',
	standalone: true
})

export class PasswordStrengthDirective {
	@Output() strengthChange = new EventEmitter<string>();

	constructor(private el: ElementRef) { }

	@HostListener('input') onInput() {
		const password = this.el.nativeElement.value;
		const strength = this.calculateStrength(password);

		// Emit the strength to the parent component
		this.strengthChange.emit(strength);
	}

	private calculateStrength(password: string): string {
		// Adjust the password strength logic based on your requirements
		const letterRegex = /[a-zA-Z]/g;
		const numberRegex = /\d/g;

		const letterCount = (password.match(letterRegex) || []).length;
		const numberCount = (password.match(numberRegex) || []).length;

		if (letterCount >= 5 && numberCount >= 5) {
			return 'Strong';
		} else if (letterCount >= 5 && numberCount >= 1) {
			return 'Medium';
		} else {
			return 'Weak';
		}
	}
}