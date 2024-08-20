import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-parent',
    standalone: true,
    imports: [ChildComponent],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent {

    // @ViewChild(ChildComponent) childComponentRef: ChildComponent;
    
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

    constructor(
        private sharedService: SharedService,
    ) { }

    emitEvent() {
        this.myEvent.emit("Hello Emit, Parent Component !!");
    }

    sendData(): void {
        this.sharedService.setData('Hello, Parent Component !!');
    }

    onButtonClick() {
        console.log("Clicked from Parent Component")
    }
}
