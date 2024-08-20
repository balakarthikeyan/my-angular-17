import { Component } from '@angular/core';
import { CustomAttributeDirective } from 'src/app/directives/custom-attribute.directive';
import { CustomEventDirective } from 'src/app/directives/custom-event.directive';
import { CustomStructuralDirective } from 'src/app/directives/custom-structural.directive';
import { PasswordStrengthDirective } from 'src/app/directives/password-strength.directive';
import { RestrictedCharsDirective } from 'src/app/directives/restricted-chars.directive';

@Component({
    selector: 'app-directive-example',
    standalone: true,
    imports: [
        CustomStructuralDirective,
        CustomAttributeDirective,
        CustomEventDirective,
        PasswordStrengthDirective,
        RestrictedCharsDirective
    ],
    templateUrl: './directive-example.component.html',
    styleUrl: './directive-example.component.css'
})
export class DirectiveExampleComponent {
    isVisible: boolean = true;
    dynamicColor: string = 'purple';
    passwordStrength!: string;
    restrictedChars: string ='@#$%';

    public changeStrength(strength: string) {
        this.passwordStrength = strength;
    }
}
