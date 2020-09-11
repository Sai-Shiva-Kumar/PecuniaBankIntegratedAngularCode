import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancomponentComponent } from './loancomponent.component';

describe('LoancomponentComponent', () => {
  let component: LoancomponentComponent;
  let fixture: ComponentFixture<LoancomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoancomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
