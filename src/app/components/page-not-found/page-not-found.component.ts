import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { map, shareReplay, takeWhile, tap, timer } from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe],
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
})

export class PageNotFoundComponent implements OnInit {
    constructor(
        private _router:Router
    ){ }

    countDown$ = timer(0, 500)
        .pipe(
            map((value) => 10 - value),
            takeWhile((value) => value >= 0),
            shareReplay(1),
        );

    redirectHome$ = this.countDown$.pipe(
        tap((value) => {
            if (value <= 0) {
                this._router.navigate(['/home']);
            }
        }),
        takeUntilDestroyed()
    );

    ngOnInit(): void {
        this.redirectHome$.subscribe();
    }
}
