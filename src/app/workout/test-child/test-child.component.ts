import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoPipe } from 'src/app/pipes/demo.pipe';
import { CustomNumberPipe } from 'src/app/pipes/custom-number.pipe';

enum Answer {
    No = 0,
    Yes = 1,
}

@Component({
    selector: 'app-test-child',
    standalone: true,
    imports: [CommonModule, TestComponent, DemoPipe, CustomNumberPipe, FormsModule],
    templateUrl: './test-child.component.html',
    styleUrl: './test-child.component.css'
})
export class TestChildComponent {
    burgers = 0;
    pizzas = 0;
    totalItems = 0;

    greenStyle: boolean = true;
    styles = {
        backgroundColor: 'purple',
        color: 'indianred',
        fontSize: '15px',
        opacity: 0.7,
    }

    enum: typeof Answer = Answer;
    enumValue: number = Answer.No;
    onEnumClick() {
        this.enumValue = (this.enumValue === Answer.Yes ? Answer.No : Answer.Yes);
    }

    constructor(
    ) {
        this.calculateTotalItems()
    }

    burgersChanged(count: number) {
        this.burgers = count;
        this.calculateTotalItems()
    }

    pizzasChanged(count: number) {
        this.pizzas = count;
        this.calculateTotalItems()
    }

    calculateTotalItems() {
        this.totalItems = this.burgers + this.pizzas;
    }
}
