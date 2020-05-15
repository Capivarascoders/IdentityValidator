import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedingValidationsComponent } from './peding-validations.component';

describe('PedingValidationsComponent', () => {
  let component: PedingValidationsComponent;
  let fixture: ComponentFixture<PedingValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedingValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedingValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
