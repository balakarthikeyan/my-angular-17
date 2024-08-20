import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject, Subscription, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'app-observables-example',
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    templateUrl: './observables-example.component.html',
    styleUrl: './observables-example.component.css'
})
export class ObservablesExampleComponent implements OnInit, OnDestroy {
    obs3$: any;
    private unsubscribe$ = new Subject<void>();
    private subs: Subscription[] = [];

    ngOnInit() {
        const sub1 = interval(1000).subscribe(
            {
                next: data => {
                    console.log('Next method subscribe', data)
                },
                error: error => {
                    console.error('Error fetching JSON data:', error)
                }
            });
        this.subs.push(sub1);

        const sub2 = interval(1000).subscribe((value: any) => {
            console.log('Normal subscribe', value);
        });
        this.subs.push(sub2);

        this.obs3$ = interval(1000).pipe(
            tap((value) => {
                console.log('Pipe with tap & Async', value);
            })
        );

        interval(1000)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((value) => {
                console.log('Pipe with takeUntil', value);
            });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();

        //Subscription method
        this.subs.forEach((s) => s.unsubscribe());
    }
}
