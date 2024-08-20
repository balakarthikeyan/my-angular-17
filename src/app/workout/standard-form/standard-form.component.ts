import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

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

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.buildProfileForm();
        this.buildLoginForm();
    }

    buildProfileForm() {
        this.profileForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            secretKey: new FormControl(''),
            email: new FormControl<string>(''),
            password: new FormControl<string>('', {
                validators: [Validators.required, Validators.pattern(this.StrongPasswordRegx)],
            }),
            confirmPassword: new FormControl<string>('',{
                validators: [Validators.required, confirmPasswordValidator],
            }),
        });
    }

    get passwordFormField() {
        return this.profileForm.get('password');
    }

    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.loginForm.value;
        if (val.email && val.password) {
            console.log(val.email, val.password, "User is logged in");
        }
    }

    onSubmit() {
        if (this.profileForm.valid) {
            console.log(JSON.stringify(this.profileForm.value));
        }
    }
}