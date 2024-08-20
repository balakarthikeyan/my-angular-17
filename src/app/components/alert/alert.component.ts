import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-alert',
	standalone: true,
	imports: [],
	template: `
    <div class="alert" [class.alert-success]="type === 'success'" [class.alert-danger]="type === 'danger'">
      {{ message }}
    </div>
	`,
	styleUrl: './alert.component.css'
})

export class AlertComponent {
	@Input()
	type!: 'success' | 'danger';
	@Input()
	message!: string;
}