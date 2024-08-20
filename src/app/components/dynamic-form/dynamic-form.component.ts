import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicErrorComponent } from '../dynamic-field/dynamic-error/dynamic-error.component';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';

@Component({
	selector: 'app-dynamic-form',
	standalone: true,
	imports: [CommonModule, FormsModule, ReactiveFormsModule, DynamicErrorComponent, DynamicFieldComponent],
	templateUrl: './dynamic-form.component.html',
	styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

	registerForm!: FormGroup;
	fields: any = [];
	model = {
		firstname: {
			type: "text",
			value: "",
			label: "FirstName",
			rules: {
				required: true,
			}
		},
		lastname: {
			type: "text",
			value: "",
			label: "LastName",
			rules: {
				required: true,
			}
		},
		address: {
			type: "text",
			value: "",
			label: "Address",
			rules: {

			}
		},
		age: {
			type: "number",
			value: "",
			label: "Age",
			rules: {

			}
		},
		birthDay: {
			type: "date",
			value: "",
			label: "Birthday",
			rules: {

			}
		},
		typeBussines: {
			label: "Bussines Type",
			value: "premium",
			type: "radio",
			options: [
				{
					label: "Enterprise",
					value: "1500",
				},
				{
					label: "Home",
					value: "6",
				},
				{
					label: "Personal",
					value: "1",
				},
			],
			rules: {

			}
		},
		newsletterIn: {
			label: "Suscribe to newsletter",
			value: "email",
			type: "checkbox",
			rules: {

			}
		},
		country: {
			id: 'country',
			label: "Country",
			type: "select",
			value: "",
			options: [
				{
					label: "Spain",
					value: "ES"
				},
				{
					label: "USA",
					value: "US"
				}
			],
			provideData: [
				{
					label: 'Barcelona',
					sourceValue: 'ES',
					value: 'BCN'
				},
				{
					label: 'Madrid',
					sourceValue: 'ES',
					value: 'MDN'
				},
				{
					label: 'New York',
					sourceValue: 'US',
					value: 'NYC'
				},
				{
					label: 'Cleveland',
					sourceValue: 'CLV',
					value: 'E'
				}
			],
			rules: {

			}
		}
	};

	constructor(
		private formBuilder: FormBuilder,
		private router: Router
	) {
		this.buildRegisterForm();
		this.registerForm.controls['firstname'].valueChanges.subscribe((value) => {
			console.log("From DynamicFormComponent", value);
		});
	}

	getFormControlsFields() {
		const formGroupFields: any = {};
		for (const field of Object.keys(this.model)) {
			const fieldProps = Object.entries(this.model).find(([key, value]) => key === field)?.[1];
			const validators = this.addValidator(fieldProps?.rules);
			formGroupFields[field] = new FormControl(fieldProps?.value, validators);
			this.fields.push({ ...fieldProps, fieldName: field });
		}
		return formGroupFields;
	}

	buildRegisterForm() {
		const formGroupFields = this.getFormControlsFields();
		this.registerForm = new FormGroup(formGroupFields);
	}

	addValidator(rules: any) {
		if (!rules) {
			return [];
		}

		const validators = Object.keys(rules).map(
			(rule: string): any => {
				switch (rule) {
					case "required":
						return Validators.required;
				}
			}
		);
		return validators;
	}

	onSubmit() {
		console.log(JSON.stringify(this.registerForm.value));
	}
}
