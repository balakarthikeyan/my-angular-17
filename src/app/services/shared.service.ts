import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, shareReplay } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SharedService {

	private apiUrl = "https://fakestoreapi.com/users";
	private users$!: Observable<any[]>;
	private dataSubject: ReplaySubject<string> = new ReplaySubject<string>(1);

	constructor(
		private httpClient: HttpClient
	) { }

	setData(data: string): void {
		this.dataSubject.next(data);
	}

	getData$(): Observable<string> {
		return this.dataSubject.asObservable();
	}

	getUsers(): Observable<any[]> {
		if (!this.users$) {
			this.users$ = this.httpClient.get<any[]>(this.apiUrl).pipe(
				shareReplay(1) // Caches and replays the latest emission
			);
		}
		return this.users$;
	}
}
