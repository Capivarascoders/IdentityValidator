import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidateComponent } from './not-validate.component';

describe('NotValidateComponent', () => {
  let component: NotValidateComponent;
  let fixture: ComponentFixture<NotValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
