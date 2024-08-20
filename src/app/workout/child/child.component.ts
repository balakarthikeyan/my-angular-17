import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [ParentComponent],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy {
    receivedData: string = '';
    unsubscribe = new Subject<void>();
    username: string = 'John Joe';

    constructor(
        private sharedService: SharedService,
        private meta: Meta
    ) { }

    ngOnInit(): void {
        this.meta.addTag({ name: 'Child Component | Observables', content: 'My Page Title' });

        this.sharedService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
            console.log("From ChildComponent", data);
            this.receivedData = data;
        });
    }

    handleEvent(event: string) {
        console.log(event);
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
