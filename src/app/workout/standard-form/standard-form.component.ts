import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, filter } from 'rxjs';
import { confirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

export type Notes = {
    title: string,
    description: string
};

@Component({
    selector: 'app-standard-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './standard-form.component.html',
    styleUrl: './standard-form.component.css'
})
export class StandardFormComponent {
    profileForm!: FormGroup;
    loginForm!: FormGroup;
    StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

    notes: Notes = {
        title: '',
        description: ''
    };
	fileName = '';

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.buildProfileForm();
        this.buildLoginForm();

        // Individual field changes
        this.loginForm.controls['email'].valueChanges.subscribe((value) => {
            console.log(value.toUpperCase());
        });

        // Form Changes
        this.loginForm.valueChanges
            .pipe(
                map((value) => {
                    value.password = value.password.toUpperCase();
                    return value;
                }),
                filter(() => this.loginForm.valid)
            )
            .subscribe((value) => {
                console.log("Reactive Form valid value: ", JSON.stringify(value));
            });
    }

    // Reactive Form
    buildProfileForm() {
        this.profileForm = new FormGroup({
            firstName: new FormControl<string>(''),
            lastName: new FormControl<string>(''),
            secretKey: new FormControl<string>(''),
            email: new FormControl<string>(''),
            password: new FormControl<string>('', {
                validators: [Validators.required, Validators.pattern(this.StrongPasswordRegx)],
            }),
            confirmPassword: new FormControl<string>('', {
                validators: [Validators.required, confirmPasswordValidator],
            }),
        });
    }

    // custom Get function to set custom Validation
    get passwordFormField() {
        return this.profileForm.get('password');
    }

    // FormBuilder API
    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.loginForm.value;
        if (val.email && val.password) {
            console.log(val.email, val.password);
        }
    }

    onSubmit() {
        if (this.profileForm.valid) {
            console.log(JSON.stringify(this.profileForm.value));
        }
    }

    onSubmitTemplateBased(notes: any) {
        console.log(notes);
    }

    onFileSelected(event: any) {
        const file:File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);
        }
    }
}