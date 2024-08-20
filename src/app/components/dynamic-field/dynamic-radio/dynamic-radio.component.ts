import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-dynamic-radio',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './dynamic-radio.component.html',
    styleUrl: './dynamic-radio.component.css'
})
export class DynamicRadioComponent {
    @Input()
    field!: any;
    @Input()
    formName!: FormGroup;

    constructor(private formgroupDirective: FormGroupDirective) {
        this.formName = formgroupDirective.control;
    }
}
