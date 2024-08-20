import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-dynamic-checkbox',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './dynamic-checkbox.component.html',
    styleUrl: './dynamic-checkbox.component.css'
})
export class DynamicCheckboxComponent {
    @Input()
    field!: any;
    @Input()
    formName!: FormGroup;

    constructor(private formgroupDirective: FormGroupDirective) {
        this.formName = formgroupDirective.control;
    }
}
