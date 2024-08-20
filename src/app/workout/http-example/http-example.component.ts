import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-http-example',
    standalone: true,
    imports: [],
    templateUrl: './http-example.component.html',
    styleUrl: './http-example.component.css'
})
export class HttpExampleComponent implements OnInit {

    newPost = {
        title: 'New Post',
        body: 'Description of the new post'
    };

    constructor(
        private httpService: HttpService,
    ) { }

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

}
