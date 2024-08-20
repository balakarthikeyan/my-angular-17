import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesExampleComponent } from './observables-example.component';

describe('ObservablesExampleComponent', () => {
  let component: ObservablesExampleComponent;
  let fixture: ComponentFixture<ObservablesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
