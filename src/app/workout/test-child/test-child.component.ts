import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-test-child',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.css'
})
export class TestChildComponent {

}
