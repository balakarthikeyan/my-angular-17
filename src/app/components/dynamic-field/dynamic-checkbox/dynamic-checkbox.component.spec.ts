import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCheckboxComponent } from './dynamic-checkbox.component';

describe('DynamicCheckboxComponent', () => {
  let component: DynamicCheckboxComponent;
  let fixture: ComponentFixture<DynamicCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
