import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-dynamic-field',
    standalone: true,
    imports: [
        CommonModule,
        DynamicInputComponent,
        DynamicSelectComponent,
        DynamicCheckboxComponent,
        DynamicRadioComponent
    ],
    templateUrl: './dynamic-field.component.html',
    styleUrl: './dynamic-field.component.css'
})
export class DynamicFieldComponent implements OnInit, AfterViewInit {
    formName!: FormGroup;

    @Input()
    field!: any;

    @ViewChild('dynamicInputContainer', { read: ViewContainerRef }) dynamicInputContainer!: ViewContainerRef;

    constructor(
        private formgroupDirective: FormGroupDirective,
        private cd: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.formName = this.formgroupDirective.control;
    }

    ngAfterViewInit(): void {
        this.registerDynamicField();
    }

    private registerDynamicField() {
        // this.dynamicInputContainer.clear();
        // const componentInstance = this.getComponentByType(this.field.type)
        // const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
        // dynamicComponent.setInput('field', this.field);
        this.cd.detectChanges();
    }
}
