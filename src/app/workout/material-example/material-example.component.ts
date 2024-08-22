import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-material-example',
	standalone: true,
	imports: [MaterialModule, RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
	templateUrl: './material-example.component.html',
	styleUrl: './material-example.component.css'
})
export class MaterialExampleComponent {
	allfoods: Food[] = [
		{ value: 'steak-0', viewValue: 'Steak' },
		{ value: 'pizza-1', viewValue: 'Pizza' },
		{ value: 'tacos-2', viewValue: 'Tacos' },
		{ value: 'pasta-3', viewValue: 'Pasta' }
	];
	myselectedFoods = ['pasta-3', 'steak-0'];
	foodForm: FormControl = new FormControl(this.myselectedFoods);
}
