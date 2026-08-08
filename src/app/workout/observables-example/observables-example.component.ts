import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { interval, Subject, Subscription, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'app-observables-example',
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    templateUrl: './observables-example.component.html',
    styleUrl: './observables-example.component.css'
})

export class ObservablesExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    obs3$: any;
    private unsubscribe$ = new Subject<void>();
    private subs: Subscription[] = [];

    constructor() {
        alert("1. on changes called");
    }

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

        alert("2. on init is called");
    }

    ngOnChanges(
        changes: import("@angular/core").SimpleChanges
    ): void {
        alert(changes);
    }

    ngDoCheck(): void {
        alert("3. do check is called");
    }

    ngAfterContentInit(): void {
        alert("4. after content init called");
    }

    ngAfterContentChecked(): void {
        alert("5. after content check called");
    }

    ngAfterViewInit(): void {
        alert('6. after view init called');
    }

    ngAfterViewChecked(): void {
        alert('7. after view init checked');
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();

        //Subscription method
        this.subs.forEach((s) => s.unsubscribe());
        alert('8. on destroy called');
    }
}
