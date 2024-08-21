import { Component, AfterContentInit, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card/course-card.component';
import { Course } from '../interfaces/course';
import { Post } from '../interfaces/post';
import { LocaleSwitcherComponent } from '../components/locale-switcher/locale-switcher.component';
import { SharedModule } from '../modules/shared.module';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, CourseCardComponent, LocaleSwitcherComponent, SharedModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent implements AfterContentInit, OnInit, AfterViewInit {

    textColor: string = 'white';
    fontSize: string = '16px';

    posts: Post[] = [];
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

        this.httpService.getCustomParamData().subscribe({
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
    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngAfterContentInit(): void { }

    // Runs after the component view
    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngAfterViewInit(): void { }

    trackByFn(index: number, item: any): number {
        return item.id;
    }

}
