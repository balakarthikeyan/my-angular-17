import { Attribute, Component, EventEmitter, HostAttributeToken, inject, Input, Output } from '@angular/core';
import { MyHostAttribute } from 'src/app/attributes/myhostattribute';

export type DividerSize = 'small' | 'big' | 'medium';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [],
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})
export class TestComponent {
    @Input() size: DividerSize = "small";
    @Input() foodItem!: string;
    @Input() cartValue!: number;
    @Output() changed = new EventEmitter<number>()
    
    // Replacing Static Inputs with the HostAttributeToken comment @Attribute
    // constructor(
    //     @Attribute('primaryLabel') public primaryLabel: string,
    //     @Attribute('secondaryLabel') public secondaryLabel: string
    // ) {
    // }

    primaryLabel = inject(new HostAttributeToken('primaryLabel'), { optional: true });
    secondaryLabel = inject(new HostAttributeToken('secondaryLabel'), { optional: true });
    thirdLabel = MyHostAttribute('thirdLabel', '❤');

    inc() {
        this.changed.emit(this.cartValue + 1)
    }

    dec() {
        this.changed.emit(this.cartValue - 1 < 0 ? 0 : this.cartValue - 1)
    }
}
