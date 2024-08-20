import { Component, input } from '@angular/core';
import { ThumbnailAreaDirective } from 'src/app/directives/thumbnail-area.directive';
import { Course } from 'src/app/interfaces/course';

@Component({
	selector: 'app-course-card',
	standalone: true,
	imports: [ThumbnailAreaDirective],
	templateUrl: './course-card.component.html',
	styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
	course = input.required<Course>()
}
