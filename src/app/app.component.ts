import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title: string = 'my-angular-17';
	constructor(
		private spinner: NgxSpinnerService
	) { }

	ngOnInit() {
		this.spinner.show();
		setTimeout(() => {
			this.spinner.hide();
		}, 5000);
	}
}
