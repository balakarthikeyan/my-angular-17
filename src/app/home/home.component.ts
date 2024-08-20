import { Component, AfterContentInit, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Course } from '../interfaces/course';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CourseCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent implements AfterContentInit, OnInit, AfterViewInit, OnDestroy {

    receivedData: string = '';
    unsubscribe = new Subject<void>();
    posts: any = [];
    users: any = [];

    user = {
        isLoggedIn: true,
        name: 'John Joe',
    };

    tasks = [
        { id: 1, name: 'Task 1', status: 'Pending' },
        { id: 2, name: 'Task 2', status: 'Completed' },
        { id: 3, name: 'Task 3', status: 'In Progress' },
    ];

    weather = {
        condition: 'sunny', // 'sunny', 'rainy', 'cloudy', etc.
    };

    courses: Array<Course> = [
        {
            title: 'Angular',
            description: '',
            image: 'https://via.placeholder.com/150/66b7d2',
            rank: 5,
            timeSpan: "6h"
        },
        {
            title: 'React JS',
            description: '',
            image: 'https://via.placeholder.com/150/ffb7d2',
            rank: 5,
            timeSpan: "5h"
        },
        {
            title: 'Node JS',
            description: '',
            image: 'https://via.placeholder.com/150/ccb7d2',
            rank: 5,
            timeSpan: "3h"
        },
        {
            title: 'AWS',
            description: '',
            image: 'https://via.placeholder.com/150/bbb7d2',
            rank: 5,
            timeSpan: "2h"
        },
    ];

    constructor(
        private httpService: HttpService,
        private sharedService: SharedService,
    ) { }

    ngOnInit(): void {

        this.sharedService.getData$().pipe(takeUntil(this.unsubscribe)).subscribe(data => {
            this.receivedData = data;
        });

        this.posts = this.httpService.getCustomParamData().subscribe({
            next: posts => {
                console.log(posts);
                this.posts = posts;
            }
        });

        this.users = this.sharedService.getUsers().subscribe({
            next: users => {
                console.log(users);
            }
        });
    }

    // Initialize third-party content formatting
    ngAfterContentInit(): void { }

    // Runs after the component view
    ngAfterViewInit(): void { }

    sendData(): void {
        this.sharedService.setData('Hello, Component B!');
    }

    trackByFn(index: number, item: any): number {
        return item.id;
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
