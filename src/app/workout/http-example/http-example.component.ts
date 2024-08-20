import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-http-example',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxSpinnerModule],
    templateUrl: './http-example.component.html',
    styleUrl: './http-example.component.css'
})
export class HttpExampleComponent implements OnInit {

    typeSelected: string;

    newPost = {
        title: 'New Post',
        body: 'Description of the new post'
    };

    constructor(
        private httpService: HttpService,
        private spinnerService: NgxSpinnerService,
    ) {
        this.typeSelected = 'fire';
    }

    ngOnInit(): void {

        this.httpService.getJsonData().subscribe({
            next: data => {
                console.log('JSON Data:', data)
            },
            error: error => {
                console.error('Error fetching JSON data:', error)
            }
        });

        this.httpService.getImage().subscribe({
            next: image => {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log('Image:', reader.result);
                };
                reader.readAsDataURL(image);
            },
            error: error => {
                console.error('Error fetching image:', error)
            }
        });

        this.httpService.addPost(this.newPost).subscribe({
            next: response => {
                console.log('Post added successfully:', response)
            },
            error: error => {
                console.error('Error adding post:', error)
            }
        });
    }

    public showSpinner(): void {
        this.spinnerService.show();

        setTimeout(() => {
            this.spinnerService.hide();
        }, 5000); // 5 seconds
    }
}
