import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [ParentComponent],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent {

    username: string = 'John Joe';

    handleEvent(event: string) {
        console.log(event);
    }
}
