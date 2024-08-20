import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Customer } from '../models/customer';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private apiUrl = 'https://jsonplaceholder.typicode.com';
    customers: Customer[] = [];

    constructor(private httpClient: HttpClient) { }

    getCustomParamData(): Observable<any> {
        const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        const params = new HttpParams().set('_page', "1").set('_limit', "10");
        return this.httpClient.get<any[]>(`${this.apiUrl}/posts`, { params, headers },);

        // const params = new HttpParams({ fromString: '_page=1&_limit=5' });
        // return this.httpClient.request<any[]>("GET", `${this.apiUrl}/posts`, { responseType: "json", params });
    }

    // Method to fetch JSON data
    getJsonData(): Observable<any> {
        return this.httpClient.get<any>(`${this.apiUrl}/posts`).pipe(
            catchError(error => {
                console.error('Error fetching JSON data:', error);
                return throwError(() => new Error('Something went wrong; please try again later.'));
            })
        );
    }

    // Method to fetch an image
    getImage(): Observable<Blob> {
        return this.httpClient.get(`${this.apiUrl}/photos/1`, { responseType: 'blob' }).pipe(
            catchError(error => {
                console.error('Error fetching image:', error);
                return throwError(() => new Error('Unable to fetch image.'));
            })
        );
    }

    // Method to simulate adding a new post
    addPost(newPost: any): Observable<any> {
        return this.httpClient.post<any>(`${this.apiUrl}/posts`, newPost).pipe(
            catchError(error => {
                console.error('Error adding post:', error);
                return throwError(() => new Error('Failed to add post.'));
            })
        );
    }

}
