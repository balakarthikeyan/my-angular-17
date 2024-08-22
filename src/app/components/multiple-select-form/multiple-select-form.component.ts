import { ChangeDetectionStrategy, Component, computed, effect, HostAttributeToken, inject, input } from '@angular/core';
import { toSignal, outputFromObservable } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';
import { OptionFormGroup } from 'src/app/models/optionformgroup';

@Component({
    selector:'app-multiple-select-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './multiple-select-form.component.html',
    styleUrl: './multiple-select-form.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleSelectFormComponent {
    readonly label = inject(new HostAttributeToken('label'), { optional: true });
    readonly optionLabelKey = inject(new HostAttributeToken('optionLabelKey'), { optional: true });
    readonly optionValueKey = inject(new HostAttributeToken('optionValueKey'), { optional: true });
    readonly options = input.required<any[]>();

    readonly form = new FormGroup({
        search: new FormControl<string>(''),
        selectAll: new FormControl<boolean>(false),
        options: new FormArray<any>([])
    });
    private readonly optionsControl = this.form.get('options') as FormArray;

    private readonly selectAll = toSignal(this.form.get('selectAll')!.valueChanges, {
        initialValue: null
    });
    private readonly search = toSignal(this.form.get('search')!.valueChanges, {
        initialValue: this.form.get('search')!.value
    });

    private readonly optionsFormArray = computed<FormArray>(() => {
        this.optionsControl.clear();
        this.populateOptionsFormArray(this.options(), this.optionLabelKey, this.optionValueKey);

        return this.optionsControl;
    });

    readonly filteredOptionsFormGroups = computed<FormGroup[]>(() => {
        const search = this.search() || '';
        return this.optionsFormArray()
            .controls
            .filter(group => group.value.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())) as FormGroup[];
    });

    readonly valueChange = outputFromObservable<any[]>(
        this.optionsControl.valueChanges.pipe(
            debounceTime(0),
            map(this.filterSelectedOptions),
        )
    );

    constructor() {
        effect(() => {
            const selectAll = this.selectAll();
            if (selectAll !== null) {
                this.handleSelectAll(selectAll);
            }
        });
    }

    private populateOptionsFormArray(options: any[], labelKey: string | null, valueKey: string | null): void {
        options.forEach(option => {
            this.optionsControl.push(new FormGroup({
                checked: new FormControl(false),
                value: new FormControl(valueKey ? option[valueKey] : option),
                label: new FormControl(labelKey ? `${option[labelKey]}` : `${option}`)
            }), {
                emitEvent: false
            });
        });
    }

    private handleSelectAll(selectAll: boolean | null): void {
        this.optionsControl
            .controls
            .forEach((group) => group.get('checked')!.setValue(selectAll));
    }

    private filterSelectedOptions(formGroups: OptionFormGroup[]): any[] {
        return formGroups
            .filter((group: OptionFormGroup) => group.checked)
            .map(group => group.value);
    }
}
