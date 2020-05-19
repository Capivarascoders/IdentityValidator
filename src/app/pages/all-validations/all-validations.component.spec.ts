import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllValidationsComponent } from './all-validations.component';

describe('AllValidationsComponent', () => {
  let component: AllValidationsComponent;
  let fixture: ComponentFixture<AllValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
