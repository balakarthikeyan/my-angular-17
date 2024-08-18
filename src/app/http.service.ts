import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Customer } from './models/customer';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private apiUrl = "http://localhoat:3000/customers";


    constructor(private httpClient: HttpClient) { }

    getcustomers(): Observable<Customer[]> {
        return this.httpClient.get<Customer[]>(this.apiUrl);

        // const params = new HttpParams().set('_page', "1").set('_limit', "1");
        // return this.httpClient.get<Customer[]>(this.apiUrl, { params });

        // const params = new HttpParams({ fromString: '_page=1&_limit=1' });
        // return this.httpClient.request<Customer[]>("GET", this.apiUrl, { responseType: "json", params });

        // const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
        // return this.httpClient.get<Customer[]>(this.apiUrl, { headers });

        // return this.httpClient.put(this.apiUrl,
        //     {
        //         "id": 1,
        //         "name": "NewCustomer001",
        //         "email": "newcustomer001@email.com",
        //         "tel": "0000252525"
        //     })
        //     .subscribe(
        //         data => {
        //             console.log("PUT Request is successful ", data);
        //         },
        //         error => {
        //             console.log("Rrror", error);
        //         }
        //     );

        // return this.httpClient.patch(this.apiUrl)
        //     .subscribe(
        //         data => {
        //             console.log("PATCH Request is successful ", data);
        //         },
        //         error => {
        //             console.log("Error", error);
        //         }
        //     );

        // return this.httpClient.post(this.apiUrl,
        //     {
        //         "name": "Customer004",
        //         "email": "customer004@email.com",
        //         "tel": "0000252525"
        //     })
        //     .subscribe(
        //         data => {
        //             console.log("POST Request is successful ", data);
        //         },
        //         error => {
        //             console.log("Error", error);
        //         }
        //     );
    }

}
