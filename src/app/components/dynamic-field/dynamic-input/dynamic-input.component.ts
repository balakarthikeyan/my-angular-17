import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-dynamic-input',
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule],
	templateUrl: './dynamic-input.component.html',
	styleUrl: './dynamic-input.component.css'
})
export class DynamicInputComponent {
	@Input()
	field!: any;
	@Input()
	formName!: FormGroup;

	constructor(private formgroupDirective: FormGroupDirective) {
        this.formName = formgroupDirective.control;
    }
}
