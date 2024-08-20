import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-dynamic-select',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './dynamic-select.component.html',
    styleUrl: './dynamic-select.component.css'
})
export class DynamicSelectComponent {
	@Input()
	field!: any;
	@Input()
	formName!: FormGroup;

    constructor(private formgroupDirective: FormGroupDirective) {
        this.formName = formgroupDirective.control;
    }
}
