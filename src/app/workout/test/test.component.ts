import { Attribute, Component, Input } from '@angular/core';

export type DividerSize = 'small' | 'big';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [],
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})
export class TestComponent {
    @Input()
    size: DividerSize = "small";
}
