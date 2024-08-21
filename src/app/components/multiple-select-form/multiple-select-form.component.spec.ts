import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectFormComponent } from './multiple-select-form.component';

describe('MultipleSelectFormComponent', () => {
  let component: MultipleSelectFormComponent;
  let fixture: ComponentFixture<MultipleSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleSelectFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
