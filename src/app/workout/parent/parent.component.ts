import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent {

    @Input({
        required: true,
        transform: (value: string) => value.toUpperCase(),
    })
    username!: string;
    get courses() {
        return this.username;
    }
    set courses(name: string) {
        this.username = name;
    }

    @Output()
    myEvent = new EventEmitter<string>();

    emitEvent() {
        this.myEvent.emit("Hello World!");
    }
}
